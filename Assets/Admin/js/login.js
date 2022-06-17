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



var user = document.getElementById('userName');
var pass = document.getElementById('passWord');
var noteUser = document.getElementById('note-user');
var notePass = document.getElementById('note-pass');

//Biểu thức chính quy của input userName
function checkName(userName) {
    var check = /^[A-Za-z0-9]{8,20}$/
    return check.test(userName);
}

//Biểu thức chính quy của input passWord
function checkPass(password) {
    var check = /^[A-Za-z0-9]{8,20}$/;
    return check.test(password);
}

var login = document.getElementById('login-login');

//Xử lý sự kiện click cho login
login.addEventListener("click", function () {
    if (checkName(user.value)) {
        noteUser.textContent = "";
    }
    else {
        noteUser.textContent = "Must be alphabetic or numeric and length 8-20";
        noteUser.style.color = 'red';
    }
    if (checkPass(pass.value)) {
        notePass.textContent = "";
    }
    else {
        notePass.textContent = "Must be alphabetic or numeric and length 8-20";
        notePass.style.color = 'red';
    }
    if (checkName(user.value) && checkPass(pass.value)) {
        for (let i = 0; i < account.accountItem.length; i++) {
            if (user.value === account.accountItem[i].userName && pass.value === account.accountItem[i].passWord) {
                login.setAttribute('href', './admin.html');
                break;
            }
            else {
                notePass.textContent = "Wrong account or password!";
                notePass.style.color = 'rgb(212, 215, 8)';
            }
        }
    }
})

//Biểu thức chính quy cho email
var checkEmail = /^([a-zA-Z0-9]+)@gmail\.com$/;
var loginEmail = document.getElementById('login-email');
var loginSubmit = document.getElementById('login-submit');
var noteEmail = document.getElementById('note-email');
loginEmail.addEventListener("change", function () {
    if (checkEmail.test(loginEmail.value)) {
        noteEmail.textContent = "";
        loginSubmit.classList.remove('disabled');
    }
    else {
        noteEmail.textContent = "Must have the string '@gmail.com' at the end";
        loginSubmit.classList.add('disabled');
        noteEmail.style.color = 'red';
    }
})

loginSubmit.addEventListener("click", function () {
    alert('Success!');
})




// var user = document.getElementById('userName');
// var pass = document.getElementById('passWord');
// var noteUser = document.getElementById('note-user');
// var notePass = document.getElementById('note-pass');
// for (let i = 0; i < account.accountItem.length; i++) {
//     if (user.value === account.accountItem[i].userName && pass.value === account.accountItem[i].passWord) {
//         login.setAttribute('href', './admin.html');
//         break;
//     }
//     else {
//         notePass.textContent = "Wrong account or password!";
//         notePass.style.color = 'rgb(212, 215, 8)';
//     }
// }

console.log(account.accountItem);