const form = document.querySelector('#form');
const password = document.querySelector('#pass');
const username = document.querySelector('#uname');

form.addEventListener('submit', () => {

    validateform();

})

function validateform() {
    let returnval = true;
    const pass = password.value.trim();
    const uname = username.value.trim();

    if (uname.length < 8) {
        seterror(username, '* username too short!');
        returnval = false;
    }

    if (pass.length < 8) {
        seterror(password, '* password too short!');
        returnval = false;
    }
    return returnval;
}
function seterror(id, error) {

    const txtfeild = id.parentElement;
    const span = txtfeild.querySelector('span');
    txtfeild.className = 'txt_feild error';
    span.innerText = error;

}