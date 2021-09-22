const form = document.querySelector('#form');
const password = document.querySelector('#pass');
const username = document.querySelector('#uname');

function setError(id, error) {
  const txtField = id.parentElement;
  const span = txtField.querySelector('span');
  txtField.className = 'txt_feild error';
  span.innerText = error;
}

function validateForm() {
  let returnVal = true;
  const pass = password.value.trim();
  const uname = username.value.trim();

  if (uname.length < 8) {
    setError(username, '* username too short!');
    returnVal = false;
  }

  if (pass.length < 8) {
    setError(password, '* password too short!');
    returnVal = false;
  }
  return returnVal;
}
form.addEventListener('submit', () => {
  validateForm();
});
