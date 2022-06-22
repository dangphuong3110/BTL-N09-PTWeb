//CONTACT:
// Add contact:
let tableContact = document.querySelector('.table');
let addKeyContact = document.querySelector('.add-key-contact');
let addInformationContact = document.querySelector('.add-information-contact');
let btnAddContact = document.querySelector('.btn-add-contact');
var index2 = 4;

btnAddContact.addEventListener('click', function(){
    if(addKeyContact.value != "" && addInformationContact.value != ""){
        btnAddContact.setAttribute('data-dismiss', 'modal');
        var row = tableContact.insertRow(-1);
        var cellKey = row.insertCell(0);
        var cellInformation = row.insertCell(1);
        var cellED = row.insertCell(2);
        cellKey.innerHTML = addKeyContact.value;
        cellInformation.innerHTML = addInformationContact.value;
        cellED.innerHTML = `<div class="text-center">
                                <button type="button" class="btn btn-info btn-edit-contact" data-bs-toggle="modal" data-bs-target="#exampleModal`+index2+`">
                                Edit
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop`+index2+`">
                                Del
                                </button>

                                <div class="modal fade" id="exampleModal`+index2+`" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit Contact</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label class="form-label">Key:</label>
                                            <input type="text" class="form-control input-key-contact">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Information:</label>
                                            <input type="text" class="form-control input-information-contact">
                                        </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-save-contact" data-bs-dismiss="modal">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div class="modal fade" id="staticBackdrop`+index2+`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete Contact</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="text-body">Are you sure want to delete this contact ?</h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info btn-delete-contact" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        ++index2;
        addKeyContact.value = "";
        addInformationContact.value = "";
    }
    else{
        btnAddContact.setAttribute('data-dismiss', '');
        alert("Please fill out field");
    }
});

// Edit contact:
let btnEditContact = document.querySelectorAll('.btn-edit-contact');
let inputKeyContact = document.querySelectorAll('.input-key-contact');
let inputInformationContact = document.querySelectorAll('.input-information-contact');
let btnSaveContact = document.querySelectorAll('.btn-save-contact');
let keyContact = document.querySelectorAll('.key-contact');
let informationContact = document.querySelectorAll('.information-contact');

for(let i=0; i<keyContact.length; i++){
    btnEditContact[i].addEventListener('click', function(){
        inputKeyContact[i].value = keyContact[i].textContent;
        inputInformationContact[i].value = informationContact[i].textContent;
    });
    btnSaveContact[i].addEventListener('click', function(){
        keyContact[i].textContent = inputKeyContact[i].value;
        informationContact[i].textContent = inputInformationContact[i].value;
    });
};

//Delete contact:
let btnDeleteContact = document.querySelectorAll('.btn-delete-contact');

for (let i = 0; i < keyContact.length; i++) {
    btnDeleteContact[i].addEventListener('click', function () {
      var index;
      for (let j = 0; j < tableContact.rows.length; j++)
        if (tableContact.rows[j].cells[0].textContent == keyContact[i].textContent) {
          index = j;
          break;
        }
      tableContact.deleteRow(index);
    });
  };
  