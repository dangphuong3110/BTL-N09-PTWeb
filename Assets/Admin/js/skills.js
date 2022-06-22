// SKILLS:
//Add skill:
let tableSkill = document.querySelector('.table');
let addNameSkill = document.querySelector('.add-name-skill');
let addLevelSkill = document.querySelector('.add-level-skill');
let btnAddSkill = document.querySelector('.btn-add-skill');
var index2 = 7;

btnAddSkill.addEventListener('click', function () {
  if (addNameSkill.value != "" && addLevelSkill.value != "") {
    btnAddSkill.setAttribute('data-dismiss', 'modal');
    var row = tableSkill.insertRow(-1);
    var cellName = row.insertCell(0);
    var cellLevel = row.insertCell(1);
    var cellED = row.insertCell(2);
    cellName.innerHTML = addNameSkill.value;
    cellLevel.innerHTML = addLevelSkill.value;
    cellED.innerHTML = `<div class="text-center">
                            <button type="button" class="btn btn-info btn-edit-skill" data-bs-toggle="modal"
                            data-bs-target="#exampleModal`+index2+`">
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
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Skill</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                    <div class="mb-3">
                                        <label class="form-label">Name:</label>
                                        <input type="text" class="form-control input-name-skill">
                                    </div>
                                    </form>
                                    <form>
                                    <div class="mb-3">
                                        <label class="form-label">Level:</label>
                                        <input type="text" class="form-control input-level-skill">
                                    </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-info btn-save-skill" data-bs-dismiss="modal">Save
                                    changes</button>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="modal fade" id="staticBackdrop`+index2+`" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Delete Skill</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h5 class="text-body">Are you sure want to delete this skill ?</h5>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-info btn-delete-skill" data-bs-dismiss="modal">Delete</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>`;
    ++index2;
    addNameSkill.value = "";
    addLevelSkill.value = "";
  }
  else {
    btnAddSkill.setAttribute('data-dismiss', '');
    alert("Please fill out field");
  }
});

//Edit skill:
let btnEditSkill = document.querySelectorAll('.btn-edit-skill');
let inputNameSkill = document.querySelectorAll('.input-name-skill');
let inputLevelSkill = document.querySelectorAll('.input-level-skill');
let btnSaveSkill = document.querySelectorAll('.btn-save-skill');
let nameSkill = document.querySelectorAll('.name-skill');
let levelSkill = document.querySelectorAll('.level-skill');

for (let i = 0; i < nameSkill.length; i++) {
  btnEditSkill[i].addEventListener('click', function () {
    inputNameSkill[i].value = nameSkill[i].textContent;
    inputLevelSkill[i].value = levelSkill[i].textContent;
  });
  btnSaveSkill[i].addEventListener('click', function () {
    nameSkill[i].textContent = inputNameSkill[i].value;
    levelSkill[i].textContent = inputLevelSkill[i].value;
  });
};

//Delete skill:
let btnDeleteSkill = document.querySelectorAll('.btn-delete-skill');

for (let i = 0; i < nameSkill.length; i++) {
  btnDeleteSkill[i].addEventListener('click', function () {
    var index;
    for (let j = 0; j < tableSkill.rows.length; j++)
      if (tableSkill.rows[j].cells[0].textContent == nameSkill[i].textContent) {
        index = j;
        break;
      }
    tableSkill.deleteRow(index);
  });
};
