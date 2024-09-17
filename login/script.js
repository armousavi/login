const username = document.getElementById('Username');
const password = document.getElementById('Password');
const email = document.getElementById('Email');
const Birthday = document.getElementById('Birthday');
const noUsernameData = document.getElementById('noUsername');
const noPasswordData = document.getElementById('noPassword');
const noEmail = document.getElementById('noEmail');
const noAgeData = document.getElementById('noBirthday');
const buttonSend = document.getElementsByTagName('button')[1];
const Accept = document.getElementById('Accept');
const Body = document.getElementsByTagName('body')[0];
const male = document.getElementById('Male');
const female = document.getElementById('Female');
const gender = document.getElementById('gender');
const checkUsername = document.getElementById('checkUsername');
const checkPassword = document.getElementById('checkPassword');
const checkEmail = document.getElementById('checkEmail');
const checkBirthday = document.getElementById('checkBirthday');
const darklight = document.getElementById('LightDark');
const Legend = document.getElementsByName('legend');

let pass = password.value;
let user =username.value;


buttonSend.setAttribute('disabled' , true);

username.addEventListener('blur' ,function buttonC(){
    if(username.value != '' && username.value != null){
        checkUsername.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noUsernameData.innerText = 'Username is Empty ...'
    } 
});
function noUser(){
    noUsernameData.remove('disabled')
}
setInterval(noUser , 10000)


password.addEventListener('blur', function buttonC(){
    if(password.value != '' && password.value != null){

    }else{
        noPasswordData.innerText = 'Password is Empty ...';
    }
});



function setPassword(){
    let Pass = password.value;
    if(Pass.length > 12){
        noPasswordData.innerText = 'Password is Long';
    }else if(Pass.length < 5){
        noPasswordData.innerText = 'Password is Short';
    }else{
        noPasswordData.remove('disabled')
        checkPassword.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
        
    }
    
}
password.addEventListener('blur', setPassword);


email.addEventListener('blur', function buttonC(){
    if(email.value != '' && email.value != null){
        checkEmail.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noEmail.innerText = 'Email is Empty ...';
    }
});


Birthday.addEventListener('blur', function buttonC(){
    if(Birthday.value != '' && Birthday.value != null){
        checkBirthday.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noAgeData.innerText = 'Enter Your Age ...';
    }
});


function buttonC(){
    if(username.value != '' && username.value != null){
        noUsernameData.remove('disabled');
        checkUsername.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noUsernameData.innerText = 'Username is Empty ...'
    } 

    if(password.value != '' && password.value != null){
        checkPassword.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    }else{
        noPasswordData.innerText = 'Password is Empty ...';
    }

    if(email.value != '' && email.value != null){
        checkEmail.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noEmail.innerText = 'Email is Empty ...';
    }

    if(Birthday.value != '' && Birthday.value != null){
        checkBirthday.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }else{
        noAgeData.innerText = 'Enter Your Date Of Birth ...';
    }
    if(username.value != '' && username.value != null&&password.value != '' && password.value != null&&email.value != '' && email.value != null&&Birthday.value != '' && Birthday.value != null){
        buttonSend.removeAttribute('disabled');
        alert('wellcome'+' '+ username.value);
    }else{
        buttonSend.setAttribute('disabled' , true);
    }    
}




Accept.addEventListener('change' ,function(){
    if(Accept.checked == true && male.checked == true || female.checked ==true){
        buttonSend.removeAttribute('disabled')
    }else if(Accept.checked == false && male.checked == true || female.checked ==true){
        buttonSend.setAttribute('disabled' , true)
    }
})


darklight.addEventListener('click',function(){
    if(darklight.innerText == 'light'){
        Body.style.backgroundColor = 'rgb(221, 193, 155)';
        Body.style.color = 'black';
        darklight.innerText = 'Dark';
    } else if(darklight.innerText == 'Dark'){
        Body.style.backgroundColor = 'rgb(70, 54, 3)';
        Body.style.color = 'black';
        darklight.innerText = 'light';
        Legend.style.color = 'white'
        
    }
})
