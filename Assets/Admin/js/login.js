var login__password = document.getElementById('login__password');
var login__contact = document.getElementById('login__contact');
var login__forgot = document.getElementById('login__forgot');
var login__submit = document.getElementById('login__submit');
var login__back = document.getElementById('login__back');
// Chưa hoàn thành
var login__login = document.getElementById('login__login');

login__forgot.addEventListener("click", function () {
    login__password.style.display = 'block';
    login__contact.style.display = 'none';
})

login__submit.addEventListener("click", function () {
    login__password.style.display = 'none';
    login__contact.style.display = 'block';
})

login__back.addEventListener("click", function () {
    login__password.style.display = 'none';
    login__contact.style.display = 'block';
})

// Chưa hoàn thành 
// login__login.addEventListener("click", function () {
//     login__login.style.href = './admin.html';
// })

var user = document.getElementById('userName');
var note__user = document.getElementById('note__user');
var note__pass = document.getElementById('note__pass');

function checkName(userName) {
    var check = /^[A-Za-z0-9]{8,20}$/
    return check.test(userName);
}

user.addEventListener("change", function () {
    if (checkName(user.value)) {
        note__user.textContent = "";
    }
    else {
        note__user.textContent = "Must be alphabetic or numeric and length 8-20";
        note__user.style.color = "red";
    }
})