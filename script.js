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

let fieldNum;
let isInputsValid = false;
INPUT_FIELDS.forEach(field => {
    field.addEventListener('keyup', (e) => {
        fieldNum = Array.prototype.indexOf.call(INPUT_FIELDS, e.target);
        validate();
    });
});
function checkInput(input, regex, message) {
    if (regex.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function validate() {
    if (INPUT_FIELDS[fieldNum].value === '')
        return false;
    if (fieldNum < 3)
        isInputsValid = checkInput(INPUT_FIELDS[fieldNum].value, REGEX_LIST[fieldNum]);
    return isInputsValid;
}
