const form = document.querySelector('#signup');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
// const date = document.querySelector('#date');
// const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');

function setError(id, error) {
  // document.querySelector('#efname').innerHTML = error;
  // document.querySelector('#elname').innerHTML = error;

  const txtField = id.parentElement;
  const span = txtField.querySelector('span');
  txtField.className = 'txt_feild error';
  span.innerText = error;
}
function validateForm(e) {
  let returnVal = true;

  const fname = firstName.value.trim();
  const lname = lastName.value.trim();
  // const datevalue = date.value.trim();
  // const emailvalue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  // fname
  if (/[A-Z]/.test(fname[0])) {
    returnVal = true;
  } else {
    setError(firstName, '*first letter should be capital');
    returnVal = false;
  }
  if (fname.length < 2) {
    setError(firstName, '*too short!');
    returnVal = false;
  }

  // lname
  if (/[A-Z]/.test(lname[0])) {
    returnVal = true;
  } else {
    setError(lastName, '*first letter should be capital');
    returnVal = false;
  }

  // phone
  if (/^[789]\d{9}$/.test(phoneValue)) {
    returnVal = true;
  } else {
    setError(phone, '*enter a valid phone number');
    returnVal = false;
  }

  // password
  if (passwordValue.length < 8) {
    setError(password, '* password too short!');
    returnVal = false;
  }

  return returnVal;
}
form.addEventListener('submit', (e) => {
  validateForm();
});
