const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //trim to remove the whitespace
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //username control
    if(usernameValue === ''){
        setErrorFor(username,'username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    //email control
    if(emailValue === ''){
        setErrorFor(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Not a valid email');
    }else{
        setSuccessFor(email);
    }

    //password1 control
    if(passwordValue === ''){
        setErrorFor(password,'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }

    //password2 control
    if(password2Value === ''){
        setErrorFor(password,'Password2 can not be blank');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2,'Password does not match!')
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}