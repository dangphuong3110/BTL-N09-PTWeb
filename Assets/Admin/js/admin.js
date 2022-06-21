// OVERVIEW:
let editOverview = document.querySelector('#edit-overview');
let nameOverview = document.querySelector('#name-overview');
let majorOverview = document.querySelector('#major-overview');
let inputImgOverview = document.querySelector('#formFileSm');
let inputNameOverview = document.querySelector('#input-name-overview');
let inputMajorOverview = document.querySelector('#input-major-overview');
let saveOverview = document.querySelector('#save-overview');


editOverview.addEventListener('click', function(){
    inputNameOverview.value = nameOverview.textContent;
    inputMajorOverview.value = majorOverview.textContent;
});

saveOverview.addEventListener('click', function(){
    nameOverview.textContent = inputNameOverview.value;
    majorOverview.textContent = inputMajorOverview.value;
});
