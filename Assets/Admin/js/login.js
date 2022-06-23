//State tài khoản cá nhân
var account = {
    accountItem: [
        {
            userName: 'adminphuong',
            passWord: '11111111'
        },
        {
            userName: 'adminhieu',
            passWord: '11111111'
        },
        {
            userName: 'adminthai',
            passWord: '11111111'
        }
    ]
}

var loginPassword = document.getElementById('login-password');
var loginContact = document.getElementById('login-contact');
var loginForgot = document.getElementById('login-forgot');
var loginSubmit = document.getElementById('login-submit');
var loginBack = document.getElementById('login-back');
var loginAccount = document.getElementById('login-account');

// Sử lý display cho các phần forgot, back to login và submit
loginForgot.addEventListener("click", function () {
    loginPassword.style.display = 'block';
    loginContact.style.display = 'none';
})

loginSubmit.addEventListener("click", function () {
    loginPassword.style.display = 'none';
    loginContact.style.display = 'block';
})

loginBack.addEventListener("click", function () {
    loginPassword.style.display = 'none';
    loginContact.style.display = 'block';
})
loginAccount.addEventListener("click", function () {
    createUser.value = "";
    createPass.value = "";
    createEmail.value = "";
    createId.value = "";
    createComfirm.value = "";
})


var user = document.getElementById('userName');
var pass = document.getElementById('passWord');
var noteLoginPass = document.getElementById('note-pass');

//Biểu thức chính quy của input userName
function checkLoginName(userName) {
    var check = /^[A-Za-z0-9]{8,20}$/
    return check.test(userName);
}

//Biểu thức chính quy của input passWord
function checkLoginPass(password) {
    var check = /^[A-Za-z0-9]{8,20}$/;
    return check.test(password);
}

var login = document.getElementById('login-login');
//Xử lý sự kiện click cho login
login.addEventListener("click", function () {
    if (checkLoginName(user.value) || checkLoginPass(pass.value)) {
        for (let i = 0; i < account.accountItem.length; i++) {
            if (user.value === account.accountItem[i].userName && pass.value === account.accountItem[i].passWord) {
                login.setAttribute('href', './admin.html');
                noteLoginPass.textContent = '';
                break;
            }
            else {
                noteLoginPass.textContent = "Incorrect account or password";
                noteLoginPass.style.color = 'red';
                noteLoginPass.style.fontSize = '20px';
            }
        }
    }
    else {
        noteLoginPass.textContent = "Incorrect account or password";
        noteLoginPass.style.color = 'red';
        noteLoginPass.style.fontSize = '20px';
    }
})


//create account
//Biểu thức chính quy cho email
var checkEmail = /^([a-zA-Z0-9]+)@gmail\.com$/;
var loginEmail = document.getElementById('login-email');
var loginSubmit = document.getElementById('login-submit');
var noteEmail = document.getElementById('note-email');
loginEmail.addEventListener("change", function () {
    if (checkEmail.test(loginEmail.value)) {
        noteLoginEmail.textContent = "";
        loginSubmit.classList.remove('disabled');
    }
    else {
        noteEmail.textContent = "Must have the string '@gmail.com' at the end";
        loginSubmit.classList.add('disabled');
        noteLoginEmail.style.color = 'red';
        noteLoginEmail.style.fontSize = '20px';
    }
})

loginSubmit.addEventListener("click", function () {
    if (loginEmail.value.length === 0) {
        alert('Unsuccess!');
    }
    else {
        alert('Success!');
    }
})

/* Js Create account */
var createEmail = document.getElementById('create-email');
var createUser = document.getElementById('create-user');
var createPass = document.getElementById('create-pass');
var createComfirm = document.getElementById('create-comfirm');

var noteEmail = document.getElementById('note-cr-email');
var noteUser = document.getElementById('note-cr-user');
var notePass = document.getElementById('note-cr-pass');
var noteComfirm = document.getElementById('note-cr-comfirm');

//Biểu thức chính quy
var checkCreateEmail = /^([a-zA-Z0-9]+)@gmail\.com$/;
var checkCreateUser = /^[A-Za-z0-9]{8,20}$/;
var checkCreatePass = /^[A-Za-z0-9]{8,20}$/;
var checkCreateComfirm = /^[A-Za-z0-9]{8,20}$/;

//Xử lý sự kiện
var btnSuccess = document.getElementById('btn-success');

createUser.addEventListener('change', function () {
    if (checkCreateUser.test(createUser.value)) {
        noteUser.textContent = "";
    }
    else {
        noteUser.textContent = "Must be alphabetic or numeric and length 8-20";
        noteUser.style.color = "red";

    }
})
createPass.addEventListener('change', function () {
    if (checkCreatePass.test(createPass.value)) {
        notePass.textContent = "";
    }
    else {
        notePass.textContent = "Must be alphabetic or numeric and length 8-20";
        notePass.style.color = "red";
    }
})
createComfirm.addEventListener('change', function () {
    if (checkCreateComfirm.test(createComfirm.value)) {
        noteComfirm.textContent = "";
    }
    else {
        noteComfirm.textContent = "Must be alphabetic or numeric and length 8-20";
        noteComfirm.style.color = "red";
    }
})
createEmail.addEventListener('change', function () {
    if (checkCreateEmail.test(createEmail.value)) {
        noteEmail.textContent = "";
    }
    else {
        noteEmail.textContent = "Must have the string '@gmail.com' at the end";
        noteEmail.style.color = "red";
    }
})
btnSuccess.addEventListener("click", function () {
    if (createPass.value !== createComfirm.value) {
        noteComfirm.textContent = "No match"
        noteComfirm.style.color = "yellow";
    }
    else if (checkCreateEmail.test(createEmail.value) === false || checkCreateUser.test(createUser.value) === false || checkCreatePass.test(createPass.value) === false || checkCreateComfirm.test(createComfirm.value) === false) {
        alert('Unsuccess!');
    }
    else {
        alert('Success!');
    }
})



