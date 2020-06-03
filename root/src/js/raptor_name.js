var submitButton = document.getElementById('raptorNameSubmit');
// const DOMPurify = require('dompurify');

if (submitButton) {
    submitButton.addEventListener('click', event => {
        const raptorName = document.getElementsByName('raptorName')[0].value;
        localStorage.setItem('raptor_name', raptorName);
        window.location.href = '/root/html/setup/choose_repo.html';
    });
}

export function isRaptorNameValid(raptorNameText) {
    const bad_words = [
        'anal',
        'anus',
        'arse',
        'ass',
        'ballsack',
        'balls',
        'bastard',
        'bitch',
        'biatch',
        'bloody',
        'blowjob',
        'blow job',
        'bollock',
        'bollok',
        'boner',
        'boob',
        'bugger',
        'bum',
        'butt',
        'buttplug',
        'clitoris',
        'cock',
        'coon',
        'crap',
        'cunt',
        'damn',
        'dick',
        'dildo',
        'dyke',
        'fag',
        'feck',
        'fellate',
        'fellatio',
        'felching',
        'fuck',
        'f u c k',
        'fudgepacker',
        'fudge packer',
        'flange',
        'Goddamn',
        'God damn',
        'hell',
        'homo',
        'jerk',
        'jizz',
        'knobend',
        'knob end',
        'labia',
        'lmao',
        'lmfao',
        'muff',
        'nigger',
        'nigga',
        'omg',
        'penis',
        'piss',
        'poop',
        'prick',
        'pube',
        'pussy',
        'queer',
        'scrotum',
        'sex',
        'shit',
        's hit',
        'sh1t',
        'slut',
        'smegma',
        'spunk',
        'tit',
        'tosser',
        'turd',
        'twat',
        'vagina',
        'wank',
        'whore',
        'wtf',
    ];
    if (bad_words.includes(raptorNameText.trim().toLowerCase())) {
        // alert('Name must be appropriate');
        return false;
    }

    return true;
}
