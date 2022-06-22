// OVERVIEW:
let btnEditOverview = document.querySelector('.btn-edit-overview');
let nameOverview = document.querySelector('#name-overview');
let majorOverview = document.querySelector('#major-overview');
let inputImgOverview = document.querySelector('#formFileSm');
let inputNameOverview = document.querySelector('#input-name-overview');
let inputMajorOverview = document.querySelector('#input-major-overview');
let btnSaveOverview = document.querySelector('.btn-save-overview');


btnEditOverview.addEventListener('click', function(){
    inputNameOverview.value = nameOverview.textContent;
    inputMajorOverview.value = majorOverview.textContent;
});

btnSaveOverview.addEventListener('click', function(){
    nameOverview.textContent = inputNameOverview.value;
    majorOverview.textContent = inputMajorOverview.value;
});