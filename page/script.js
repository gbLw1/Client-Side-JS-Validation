const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password check cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match')
    } else {
        setSuccessFor(password2);
    }

    // show a success message //
    const fim = document.getElementById('fim');

    if((username.parentElement.className == 'form-control success') &&
    (email.parentElement.className == 'form-control success') &&
    (password.parentElement.className == 'form-control success') &&
    (password2.parentElement.className == 'form-control success')) {
        
        fim.innerHTML = `Cadastro finalizado!`
        fim.style.display = 'flex'
        fim.style.justifyContent = 'center'
        fim.style.paddingTop = '20px'

        // Almost working (only show the first one)
            // const small = document.querySelectorAll('.form-control small');
            // small.innerText = 'Accepted';
            // small.style.visibility = "visible";
            // small.style.color = "#2ecc71";
    } else {
        fim.style.display = 'none'
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    // regex
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
