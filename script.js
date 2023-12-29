const
    NAME = document.querySelector('#fight-name'),
    EMAIL = document.querySelector('#email'),
    PASSWORD = document.querySelector('#password'),
    CONFIRM_PASSWORD = document.querySelector('#password-confirmation'),
    SUBMIT = document.querySelector('button'),
    INPUT_FIELDS = document.querySelectorAll('.input-field'),
    ICONS = document.querySelectorAll('.validation-icon'),
    ERROR_MESSAGES = document.querySelectorAll('.error-message');

const
    REGEX_LIST = [/^[A-Za-z0-9_\-]{5,15}$/, /^\S+@\S+\.\S+$/, /^(?!\d+$)[^\s]{8,}$/];
    MESSAGE_LIST = ["*Must be between 5-15 characters. letters, Numbers, Underscore (_), or Hyphen (-)",
                    "*Must have a domain '@'. Mustn't contain whitespace",
                    "*Minimum 8 characters"];

let fieldNum;
let isInputsValid = false;
let isPasswordMatch = false;

INPUT_FIELDS.forEach(field => {
    field.addEventListener('keyup', (e) => {
        fieldNum = Array.prototype.indexOf.call(INPUT_FIELDS, e.target);
        validate();
    });
});

SUBMIT.addEventListener('click', (e) => {
    e.preventDefault();

    let allValid = true;
    INPUT_FIELDS.forEach(field => {
        fieldNum = Array.prototype.indexOf.call(INPUT_FIELDS, field);
        if (!validate()) {
            allValid = false;
            return;
        }
    });

    if (allValid) {
        console.log("submit is valid")
    }
    else return;
});

function checkInput(input, regex, message) {
    if (regex.test(input)) {
        validInput();
        return true;
    }
    else {
        invalidInput(message);
        return false;
    }
}

function comparePasswords(password, confirm_password) {
    if (password === confirm_password && confirm_password !== '') {
        validInput();
        return true;
    }
    else {
        invalidInput("*Passwords do not match");
        return false;
    }
}

function invalidInput(message = "*This Field is Required") {
    ERROR_MESSAGES[fieldNum].textContent = message;
    ERROR_MESSAGES[fieldNum].style.visibility = 'visible';

    INPUT_FIELDS[fieldNum].classList.add('input-error');
    ICONS[fieldNum].setAttribute('src', './images/cross.svg');
    ICONS[fieldNum].style.visibility = 'visible';
}

function validInput() {
    ERROR_MESSAGES[fieldNum].textContent = '';
    ERROR_MESSAGES[fieldNum].style.visibility = 'hidden';

    INPUT_FIELDS[fieldNum].classList.remove('input-error');
    ICONS[fieldNum].setAttribute('src', './images/check.svg');
    ICONS[fieldNum].style.visibility = 'visible';
}

function validate() {
    if (INPUT_FIELDS[fieldNum].value === '')
        return invalidInput();
    if (fieldNum < 3)
        isInputsValid = checkInput(INPUT_FIELDS[fieldNum].value, REGEX_LIST[fieldNum], MESSAGE_LIST[fieldNum]);
    if (fieldNum === 3)
        isPasswordMatch = comparePasswords(PASSWORD.value, CONFIRM_PASSWORD.value);
    return isInputsValid && isPasswordMatch;
}

