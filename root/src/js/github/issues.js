var token = localStorage.getItem('token');

if (localStorage.getItem('github_username')) {
    getGithubIssues(localStorage.getItem('github_username'));
} else {
    fetch('https://api.github.com/user', {
        headers: {
            // Include the token in the Authorization header
            Authorization: 'token ' + token,
        },
    })
        .then(res => res.json())
        .then(res => {
            var login = res.login;
            localStorage.setItem('github_username', login);
            getGithubIssues(login);
        });
}

function getGithubIssues(username) {
    if (localStorage.getItem('repository')) {
        var repo = JSON.parse(localStorage.getItem('repository'));

        if (repo.repoId && repo.issueUrl && token) {
            fetch(repo.issueUrl, {
                headers: {
                    // Include the token in the Authorization header
                    Authorization: 'token ' + token,
                },
            })
                .then(res => res.json())
                .then(res => {
                    res = res.filter(e => {
                        if (!e.assignee) {
                            return false;
                        }

                        var found = false;
                        e.assignees.forEach(assignee => {
                            console.log(assignee);
                            if (assignee.login == username) {
                                found = true;
                            }
                        });

                        return found;
                    });
                    var issueList = document.getElementById('githubIssuesList');

                    res.forEach(issue => {
                        let listElement = document.createElement('li');
                        listElement.innerHTML = issue.title;

                        issueList.appendChild(listElement);
                    });
                });
        }
    }
}
