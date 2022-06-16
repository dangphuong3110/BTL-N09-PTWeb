var createId = document.getElementById('create-id');
var createEmail = document.getElementById('create-email');
var createUser = document.getElementById('create-user');
var createPass = document.getElementById('create-pass');
var createComfirm = document.getElementById('create-comfirm');

var noteId = document.getElementById('note-id');
var noteEmail = document.getElementById('note-email');
var noteUser = document.getElementById('note-user');
var notePass = document.getElementById('note-pass');
var noteComfirm = document.getElementById('note-comfirm');

//Biểu thức chính quy
var checkId = /^[nv0-9]{8}$/;
var checkEmail = /^([a-zA-Z0-9]+)@gmail\.com$/;
var checkUser = /^[A-Za-z0-9]{8,20}$/;
var checkPass = /^[A-Za-z0-9]{8,20}$/;
var checkComfirm = /^[A-Za-z0-9]{8,20}$/;

//Xử lý sự kiện
var btnSuccess = document.getElementById('btn-success');
createId.addEventListener('change', function () {
    if (checkId.test(createId.value)) {
        noteId.textContent = "";
    }
    else {
        noteId.textContent = "Must have beginning 'nv' and length 8";
        noteId.style.color = "red";
    }
})
createEmail.addEventListener('change', function () {
    if (checkEmail.test(createEmail.value)) {
        noteEmail.textContent = "";
    }
    else {
        noteEmail.textContent = "Must have the string '@gmail.com' at the end";
        noteEmail.style.color = "red";
    }
})
createUser.addEventListener('change', function () {
    if (checkUser.test(createUser.value)) {
        noteUser.textContent = "";
    }
    else {
        noteUser.textContent = "Must be alphabetic or numeric and length 8-20";
        noteUser.style.color = "red";

    }
})
createPass.addEventListener('change', function () {
    if (checkPass.test(createPass.value)) {
        notePass.textContent = "";
    }
    else {
        notePass.textContent = "Must be alphabetic or numeric and length 8-20";
        notePass.style.color = "red";
    }
})
createComfirm.addEventListener('change', function () {
    if (checkComfirm.test(createComfirm.value)) {
        noteComfirm.textContent = "";
    }
    else {
        noteComfirm.textContent = "Must be alphabetic or numeric and length 8-20";
        noteComfirm.style.color = "red";
    }
})
btnSuccess.addEventListener("click", function () {
    if (createPass.value !== createComfirm.value) {
        noteComfirm.textContent = "No match"
    }
    else if (checkId.test(createId.value) === false || checkEmail.test(createEmail.value) === false || checkUser.test(createUser.value) === false || checkPass.test(createPass.value) === false) {
        alert('Unsuccess!');
    }
    else {
        alert('Success!');
        btnSuccess.setAttribute('href', './login.html');
    }
})

