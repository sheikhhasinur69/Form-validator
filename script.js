const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline 
function showSucces(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// Check email is valid
function checkEmail(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.text(input.value)) {
    showSucces(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSucces(input);
    }
    })
}

//Check input length
function checkLength(input, min, max) {
    if(input.value.length< min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length> max) {
        showError(input, `${getFieldName(input)}  must be ${max} characters`)
    }
}

//Check password match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match'); 
    }
}

//Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkRequired(password, 6, 25)
    checkEmail(email);
    checkPasswordMatch(password, password2);
   
})