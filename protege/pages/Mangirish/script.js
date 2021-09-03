const form = document.querySelector('#signup')
const firstname = document.querySelector('#fname')
const lastname = document.querySelector('#lname')
const date = document.querySelector('#date')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const password = document.querySelector('#password')




form.addEventListener('submit', (e) => {

    validateform();

})



function validateform(e) {

    let returnval = true;



    const fname = firstname.value.trim();
    const lname = lastname.value.trim();
    // const datevalue = date.value.trim();
    // const emailvalue = email.value.trim();
    const phonevalue = phone.value.trim();
    const passwordvalue = password.value.trim();
    //console.log(firstname.value);
    //fname

    if (/[A-Z]/.test(fname[0])) {
        returnval = true;
    } else {
        seterror(firstname, '*first letter should be capital');
        returnval = false;
    }
    if (fname.length < 2) {
        seterror(firstname, '*too short!');
        returnval = false;
    }

    //lname
    if (/[A-Z]/.test(lname[0])) {
        returnval = true;
    } else {
        seterror(lastname, '*first letter should be capital');
        returnval = false;
    }

    //phone
    if (/^[789]\d{9}$/.test(phonevalue)) {
        returnval = true;

    } else {
        seterror(phone, '*enter a valid phone number');
        returnval = false;
    }

    //password
    if (passwordvalue.length < 8) {
        seterror(password, '* password too short!');
        returnval = false;
    }








    return returnval;
}



function seterror(id, error) {
    // document.querySelector('#efname').innerHTML = error;
    // document.querySelector('#elname').innerHTML = error;



    const txtfeild = id.parentElement;
    const span = txtfeild.querySelector('span');
    txtfeild.className = 'txt_feild error';
    span.innerText = error;

}

