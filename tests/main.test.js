import * as main from '../root/src/js/main';
var fs = require('fs');
var authHTML = fs.readFileSync('root/html/setup/auth.html', 'utf8');
//test 1
test('to test disabled button', () => {
    var fakeButton = document.createElement('button');
    main.disableButton(fakeButton);
    expect(fakeButton.disabled).toEqual(true);
    jest.resetModules();
});

//test 2
test('to test show button', () => {
    var fakeButton = document.createElement('button');
    main.showButton(fakeButton);
    expect(fakeButton.disabled).toEqual(false);
    expect(fakeButton.style.display).toEqual('inline');
    jest.resetModules();
});

//test 3
test('Alternative name of image is correctly displayed when no image is found', () => {
    document.body.innerHTML = authHTML;
    var raptor_image = document.getElementById('raptor_logo');
    raptor_image.src = '';
    expect(raptor_image.alt).toBe('Raptor Logo');
    jest.resetModules();
});
//test 4
test('Image is correctly displayed', () => {
    document.body.innerHTML = authHTML;
    var raptor_image = document.getElementById('raptor_logo');
    expect(raptor_image.style.display).not.toBe('none');
    jest.resetModules();
});
//test 5
test('token correctly stored and other parts are empty', () => {
    main.storeAndredirect('fakeToken', null, null);
    expect(localStorage.getItem('token')).toBe('fakeToken');
    expect(localStorage.getItem('raptor_name')).toBe(null);
    expect(localStorage.getItem('repository')).toBe(null);
    jest.resetModules();
});
//test 6
test('token and raptorName correctly stored and other parts are empty', () => {
    main.storeAndredirect('fakeToken', 'Gary', null);
    expect(localStorage.getItem('token')).toBe('fakeToken');
    expect(localStorage.getItem('raptor_name')).toBe('Gary');
    expect(localStorage.getItem('repository')).toBe(null);
    jest.resetModules();
});
//test 7
test('All items are stored perfectly', () => {
    main.storeAndredirect('fakeToken', 'Gary', 'fake Repo');
    expect(localStorage.getItem('token')).toBe('fakeToken');
    expect(localStorage.getItem('raptor_name')).toBe('Gary');
    expect(localStorage.getItem('repository')).toBe('fake Repo');
    jest.resetModules();
});
