//EXPERIENCES:
//WORK EXPERIENCE:
// Add work experience:
let tableWorkEx = document.querySelector('.table-work-ex');
let addPeriodEx = document.querySelector('.add-period-work-ex');
let addWorkplaceEx = document.querySelector('.add-workplace-work-ex');
let addJobEx = document.querySelector('.add-job-work-ex');
let addDescEx = document.querySelector('.add-desc-work-ex');
let btnAddWorkEx = document.querySelector('.btn-add-work-ex');
var index2 = 4;

btnAddWorkEx.addEventListener('click', function(){
    if(addPeriodEx.value != "" && addWorkplaceEx.value != "" && addJobEx.value != "" && addDescEx.value != ""){
        btnAddWorkEx.setAttribute('data-dismiss', 'modal');
        var row = tableWorkEx.insertRow(-1);
        var cellPeriod = row.insertCell(0);
        var cellWorkplace = row.insertCell(1);
        var cellJob = row.insertCell(2);
        var cellDesc = row.insertCell(3);
        var cellED = row.insertCell(4);
        cellPeriod.innerHTML = addPeriodEx.value;
        cellWorkplace.innerHTML = addWorkplaceEx.value;
        cellJob.innerHTML = addJobEx.value;
        cellDesc.innerHTML = addDescEx.value;
        cellED.innerHTML = `<div class="text-center">
                                <button type="button" class="btn btn-info btn-edit-work-ex" data-bs-toggle="modal" data-bs-target="#exampleModal`+index2+`">
                                Edit
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop`+index2+`">
                                Del
                                </button>
                    
                                <div class="modal fade" id="exampleModal`+index2+`" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit Experence</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label class="form-label">Period:</label>
                                            <input type="text" class="form-control input-period-work-ex">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Workplace:</label>
                                            <input type="text" class="form-control input-workplace-work-ex">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Job:</label>
                                            <input type="text" class="form-control input-job-work-ex">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Description:</label>
                                            <input type="text" class="form-control input-desc-work-ex">
                                        </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-save-work-ex" data-bs-dismiss="modal">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                                <div class="modal fade" id="staticBackdrop`+index2+`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete Experence</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="text-body">Are you sure want to delete this experence ?</h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-delete-work-ex" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        ++index2;
        addPeriodEx.value = "";
        addWorkplaceEx.value = "";
        addJobEx.value = "";
        addDescEx.value = "";
    }
    else {
        btnAddWorkEx.setAttribute('data-dismiss', '');
        alert("Please fill out field");
      }
});

// Edit work experience:
let btnEditEx = document.querySelectorAll('.btn-edit-work-ex');
let inputPeriodEx = document.querySelectorAll('.input-period-work-ex');
let inputWorkplaceEx = document.querySelectorAll('.input-workplace-work-ex');
let inputJobEx = document.querySelectorAll('.input-job-work-ex');
let inputDescEx = document.querySelectorAll('.input-desc-work-ex');
let btnSaveEx = document.querySelectorAll('.btn-save-work-ex');
let periodEx = document.querySelectorAll('.period-work-ex');
let workplaceEx = document.querySelectorAll('.workplace-work-ex');
let jobEx = document.querySelectorAll('.job-work-ex');
let descEx = document.querySelectorAll('.desc-work-ex');

for(let i=0; i<periodEx.length; i++){
    btnEditEx[i].addEventListener('click', function(){
        inputPeriodEx[i].value = periodEx[i].textContent;
        inputWorkplaceEx[i].value = workplaceEx[i].textContent;
        inputJobEx[i].value = jobEx[i].textContent;
        inputDescEx[i].value = descEx[i].textContent;
    });
    btnSaveEx[i].addEventListener('click', function(){
        periodEx[i].textContent =  inputPeriodEx[i].value;
        workplaceEx[i].textContent =inputWorkplaceEx[i].value;
        jobEx[i].textContent = inputJobEx[i].value
        descEx[i].textContent = inputDescEx[i].value;
    });
};

// Delete work experience:
let btnDeleteWorkEx = document.querySelectorAll('.btn-delete-work-ex');

for (let i = 0; i < periodEx.length; i++) {
    btnDeleteWorkEx[i].addEventListener('click', function () {
      var index;
      for (let j = 0; j < tableWorkEx.rows.length; j++)
        if (tableWorkEx.rows[j].cells[0].textContent == periodEx[i].textContent) {
          index = j;
          break;
        }
      tableWorkEx.deleteRow(index);
    });
};

//EDUCATION:
// Add education:
let tableEdu = document.querySelector('.table-education');
let addPeriodEdu = document.querySelector('.add-period-education');
let addDiplomaEdu = document.querySelector('.add-diploma-education');
let addMajorEdu = document.querySelector('.add-major-education');
let addSUEdu = document.querySelector('.add-su-education');
let addDescEdu = document.querySelector('.add-desc-education');
let btnAddEdu = document.querySelector('.btn-add-education');
var index3 = 4;

btnAddEdu.addEventListener('click', function(){
    if(addPeriodEdu.value != "" && addDiplomaEdu.value != "" && addMajorEdu.value != "" && addSUEdu.value != "" && addDescEdu.value != ""){
        btnAddEdu.setAttribute('data-dismiss', 'modal');
        var row = tableEdu.insertRow(-1);
        var cellPeriodEdu = row.insertCell(0);
        var cellDiploma = row.insertCell(1);
        var cellMajor = row.insertCell(2);
        var cellSU = row.insertCell(3);
        var cellDescEdu = row.insertCell(4);
        var cellEDEdu = row.insertCell(5);
        cellPeriodEdu.innerHTML = addPeriodEdu.value;
        cellDiploma.innerHTML = addDiplomaEdu.value;
        cellMajor.innerHTML = addMajorEdu.value;
        cellSU.innerHTML = addSUEdu.value;
        cellDescEdu.innerHTML = addDescEdu.value;
        cellEDEdu.innerHTML = `<div class="text-center">
                                <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal`+index3+`">
                                Edit
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop`+index3+`">
                                Del
                                </button>
                    
                                <div class="modal fade" id="exampleModal`+index3+`" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit Experence</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label class="form-label">Period:</label>
                                            <input type="text" class="form-control input-period-education">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Diploma:</label>
                                            <input type="text" class="form-control input-diploma-education">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Major:</label>
                                            <input type="text" class="form-control input-major-education">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">School/Uni:</label>
                                            <input type="text" class="form-control input-su-education">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Description:</label>
                                            <input type="text" class="form-control input-desc-education">
                                        </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-save-education" data-bs-dismiss="modal">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                                <div class="modal fade" id="staticBackdrop`+index3+`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete Experence</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="text-body">Are you sure want to delete this experence ?</h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-delete-education" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        ++index3;
        addPeriodEdu.value = "";
        addDiplomaEdu.value = "";
        addMajorEdu.value = "";
        addSUEdu.value = "";
        addDescEdu.value = "";
    }
    else {
        btnAddEdu.setAttribute('data-dismiss', '');
        alert("Please fill out field");
    }
});

// Edit education:
let btnEditEdu = document.querySelectorAll('.btn-edit-education');
let inputPeriodEdu = document.querySelectorAll('.input-period-education');
let inputDiplomaEdu = document.querySelectorAll('.input-diploma-education');
let inputMajorEdu = document.querySelectorAll('.input-major-education');
let inputSUEdu = document.querySelectorAll('.input-su-education');
let inputDescEdu = document.querySelectorAll('.input-desc-education');
let btnSaveEdu = document.querySelectorAll('.btn-save-education');
let periodEdu = document.querySelectorAll('.period-education');
let diplomaEdu = document.querySelectorAll('.diploma-education');
let majorEdu = document.querySelectorAll('.major-education');
let suEdu = document.querySelectorAll('.su-education');
let descEdu = document.querySelectorAll('.desc-education');

for(let i=0; i<periodEdu.length; i++){
    btnEditEdu[i].addEventListener('click', function(){
        inputPeriodEdu[i].value = periodEdu[i].textContent;
        inputDiplomaEdu[i].value = diplomaEdu[i].textContent;
        inputMajorEdu[i].value = majorEdu[i].textContent;
        inputSUEdu[i].value = suEdu[i].textContent;
        inputDescEdu[i].value = descEdu[i].textContent;
    });
    btnSaveEdu[i].addEventListener('click', function(){
        periodEdu[i].textContent = inputPeriodEdu[i].value;
        diplomaEdu[i].textContent = inputDiplomaEdu[i].value;
        majorEdu[i].textContent = inputMajorEdu[i].value;
        suEdu[i].textContent = inputSUEdu[i].value;
        descEdu[i].textContent = inputDescEdu[i].value;
    });
};

// Delete education:
let btnDeleteEdu = document.querySelectorAll('.btn-delete-education');

for (let i = 0; i < periodEdu.length; i++) {
    btnDeleteEdu[i].addEventListener('click', function () {
      var index;
      for (let j = 0; j < tableEdu.rows.length; j++)
        if (tableEdu.rows[j].cells[0].textContent == periodEdu[i].textContent) {
          index = j;
          break;
        }
      tableEdu.deleteRow(index);
    });
  };
  