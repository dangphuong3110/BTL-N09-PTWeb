// ABOUT:
//Add about:
let tableAbout = document.querySelector('.table');
let addKeyAbout = document.querySelector('.add-key-about');
let addInformationAbout = document.querySelector('.add-information-about');
let btnAddAbout = document.querySelector('.btn-add-about');
var index2 = 8;
btnAddAbout.addEventListener('click', function () {
    if (addKeyAbout.value != "" && addInformationAbout.value != "") {
        btnAddAbout.setAttribute('data-dismiss', 'modal');
        var row = tableAbout.insertRow(-1);
        var cellKey = row.insertCell(0);
        var cellInformation = row.insertCell(1);
        var cellED = row.insertCell(2);
        cellKey.innerHTML = addKeyAbout.value;
        cellInformation.innerHTML = addInformationAbout.value;
        cellED.innerHTML = `<div class="text-center">
                                <button type="button" class="btn btn-info btn-edit-about" data-bs-toggle="modal" data-bs-target="#exampleModal`+ index2 + `">
                                    Edit
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop`+ index2 + `">
                                    Del
                                </button>   

                                <div class="modal fade" id="exampleModal`+ index2 + `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit About</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                            <label class="form-label">Key:</label>
                                            <input type="text" class="form-control input-key-about">
                                            </div>
                                        </form>
                                        <form>
                                            <div class="mb-3">
                                            <label class="form-label">Information:</label>
                                            <input type="text" class="form-control input-information-about">
                                            </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-save-about" data-bs-dismiss="modal">Save changes</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="staticBackdrop`+ index2 + `" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete About</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h5 class="text-body">Are you sure want to delete this key ?</h5>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-delete-about" data-bs-dismiss="modal">Delete</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>`;
        ++index2;
        addKeyAbout.value = "";
        addInformationAbout.value = "";
    }
    else {
        btnAddAbout.setAttribute('data-dismiss', '');
        alert("Please fill out field");
    }
});

// Edit about:
let btnEditAbout = document.querySelectorAll('.btn-edit-about');
let inputKeyAbout = document.querySelectorAll('.input-key-about');
let inputInformationAbout = document.querySelectorAll('.input-information-about');
let btnSaveAbout = document.querySelectorAll('.btn-save-about');
let keyAbout = document.querySelectorAll('.key-about');
let informationAbout = document.querySelectorAll('.information-about');

for (let i = 0; i < keyAbout.length; i++) {
    btnEditAbout[i].addEventListener('click', function () {
        inputKeyAbout[i].value = keyAbout[i].textContent;
        inputInformationAbout[i].value = informationAbout[i].textContent;
    });
    btnSaveAbout[i].addEventListener('click', function () {
        keyAbout[i].textContent = inputKeyAbout[i].value;
        informationAbout[i].textContent = inputInformationAbout[i].value;
    });
};

//Delete about:
let btnDeleteAbout = document.querySelectorAll('.btn-delete-about');

for (let i = 0; i < keyAbout.length; i++) {
    btnDeleteAbout[i].addEventListener('click', function () {
        var index;
        for (let j = 0; j < tableAbout.rows.length; j++)
            if (tableAbout.rows[j].cells[0].textContent == keyAbout[i].textContent) {
                index = j;
                break;
            }
        tableAbout.deleteRow(index);
    });
};

