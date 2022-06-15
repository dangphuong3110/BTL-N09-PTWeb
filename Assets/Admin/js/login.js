var login__password = document.getElementById('login__password');
var login__contact = document.getElementById('login__contact');
var login__forgot = document.getElementById('login__forgot')
var login__submit = document.getElementById('login__submit');
var login__back = document.getElementById('login__back');
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


login__login.addEventListener("click", function () {
    login__login.style.href = './admin.html';
})

