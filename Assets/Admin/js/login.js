var loginPassword = document.getElementById('login-password');
var loginContact = document.getElementById('login-contact');
var loginForgot = document.getElementById('login-forgot');
var loginSubmit = document.getElementById('login-submit');
var loginBack = document.getElementById('login-back');


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


//Xử lý sự kiện và biểu thức chính quy của input userName
function checkName(userName) {
    var check = /^[A-Za-z0-9]{8,20}$/
    return check.test(userName);
}

// //Sự kiện di chuyển chuột ra khỏi vùng nhập
// user.addEventListener("blur", function () {
//     if (user.value.length === 0) {
//         note-user.textContent = "Must enter input";

//     }
// })
//Sự kiện thay đổi giá trị
user.addEventListener("change", function () {
    if (checkName(user.value)) {
        noteUser.textContent = "";
    }
    else {
        noteUser.textContent = "Must be alphabetic or numeric and length 8-20";
    }
})

//Xử lý sự kiện và biểu thức chính quy của input passWord
function checkPass(password) {
    var check = /^[A-Za-z0-9]{8,20}$/;
    return check.test(password);
}

//Sự kiện di chuyển chuột ra khỏi vùng nhập
// pass.addEventListener("blur", function () {
//     if (pass.value.length === 0) {
//         note-pass.textContent = "Must enter input";
//     }
// })

//Sự kiện thay đổi giá trị
// pass.addEventListener("change", function () {
//     if (checkPass(pass.value)) {
//         login.setAttribute('href', './admin.html');
//         note-pass.textContent = "";
//     }
//     else {
//         note-pass.textContent = "Must be alphabetic or numeric and length 8-20";
//     }
// })

//Xử lý button Login
var login = document.getElementById('login-login');

// Chưa hoàn thành
login.addEventListener("click", function () {
    if (checkName(user.value)) {
        noteUser.textContent = "";
    }
    else {
        noteUser.textContent = "Must be alphabetic or numeric and length 8-20";
    }
    if (checkPass(pass.value)) {
        notePass.textContent = "";
    }
    else {
        notePass.textContent = "Must be alphabetic or numeric and length 8-20";
    }
    if (checkName(user.value) && checkPass(pass.value)) {
        login.setAttribute('href', './admin.html');
    }
})