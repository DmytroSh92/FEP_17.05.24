const formEl = document.querySelector(".js-form");
const inputs = document.querySelectorAll('.js-form input');

const regexName = /\S/;
const regexText = /^$|^.{6,}$/;
const regexEmail = /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^\+380/;

const errorMessage = {
    name : "Name must`t be empty",
    message: "Text should be > 5",
    phoneNumber: "Not valid telephone",
    email: "Not valid email"
}

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    let resultForm = [];
    inputs.forEach((input) => {
        resultForm.push(validateInput(input));
    });

    let isSuccessFrom = resultForm.every(element => element.isSuccess === true);

    if(isSuccessFrom) {
       let strMess =  resultForm.map(element => {
           return `${element.key}: ${element.value} `;
        });

       console.log(strMess);
    }
});

function validateInput(input) {
    let flag;
    if(input.id === "inputName"){
        flag = isValidateName(input.value);
        if(flag) {
            setSuccessMessage(input);
        } else {
            setErrorMessage(input, errorMessage.name);
        }
    }

    if(input.id === "inputMessage"){
        flag = isValidateMessage(input.value);
        if(flag) {
            setSuccessMessage(input);
        } else {
            setErrorMessage(input, errorMessage.message);
        }
    }

    if(input.id === "inputPhone"){
        flag = isValidatePhoneNumber(input.value);
        if(flag) {
            setSuccessMessage(input);
        } else {
            setErrorMessage(input, errorMessage.phoneNumber);
        }
    }

    if(input.id === "inputEmail"){
        flag = isValidateEmail(input.value);
        if(flag) {
            setSuccessMessage(input);
        } else {
            setErrorMessage(input, errorMessage.email);
        }
    }

    return {
        key: input.placeholder,
        value: input.value,
        isSuccess: flag
    };
}

function isValidateName(name){
    return regexName.test(name);
}

function isValidateMessage(text){
    return regexText.test(text);
}

function isValidatePhoneNumber(phone){
    return regexPhone.test(phone);
}

function isValidateEmail(email){
    return regexEmail.test(email);
}

function setSuccessMessage(input){
    const errorEl = input.nextElementSibling;
    if(errorEl.tagName === "SPAN") {
        errorEl.remove();
    }
}

function setErrorMessage(input, msg){
    const errorEl = input.nextElementSibling;
    if(errorEl.tagName !== "SPAN") {
        const spanEl = document.createElement("SPAN");
        spanEl.textContent = msg;
        input.insertAdjacentElement("afterend", spanEl);
    } else {
        errorEl.textContent = msg;
    }
}


