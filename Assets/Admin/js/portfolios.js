// PORTFOLIOS:
//Add portfolios:
let tablePortfolio = document.querySelector('.table');
let addIdPortfolio = document.querySelector('.add-id-portfolio');
let addCategoryPortfolio = document.querySelector('.add-category-portfolio');
let btnAddPortfolio = document.querySelector('.btn-add-portfolio');
var index2 = 4;

btnAddPortfolio.addEventListener('click', function () {
    if (addIdPortfolio.value != "" && addCategoryPortfolio.value != "") {
        btnAddPortfolio.setAttribute('data-dismiss', 'modal');
        var row = tablePortfolio.insertRow(-1);
        var cellId = row.insertCell(0);
        var cellCategory = row.insertCell(1);
        var cellED = row.insertCell(2);
        cellId.innerHTML = addIdPortfolio.value;
        cellCategory.innerHTML = addCategoryPortfolio.value;
        cellED.innerHTML = `<div class="text-center">
                                <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal`+index2+`">
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
                                        <h5 class="modal-title" id="exampleModalLabel">Edit Portifolio</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                        <label class="form-label">Category:</label>
                                        <input type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                        <label class="form-label">Content image 1:</label>
                                        <input type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label">Choose file image 1:</label>
                                        <input class="form-control form-control-sm" id="formFileSm" type="file">
                                        </div>
                                        <div class="mb-3">
                                        <label class="form-label">Content image 2:</label>
                                        <input type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label">Choose file image 2:</label>
                                        <input class="form-control form-control-sm" id="formFileSm" type="file">
                                        </div>
                                        <div class="mb-3">
                                        <label class="form-label">Content image 3:</label>
                                        <input type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label">Choose file image 3:</label>
                                        <input class="form-control form-control-sm" id="formFileSm" type="file">
                                        </div>
                                        <div class="mb-3">
                                        <label class="form-label">Content image 4:</label>
                                        <input type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                        <label for="formFileSm" class="form-label">Choose file image 4:</label>
                                        <input class="form-control form-control-sm" id="formFileSm" type="file">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div class="modal fade" id="staticBackdrop`+index2+`" data-bs-backdrop="static" data-bs-keyboard="false"
                                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Delete Portifolio</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="text-body">Are you sure want to delete this portifolios ?</h5>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        ++index2;
        addIdPortfolio.value = "";
        addCategoryPortfolio.value = "";
    }
    else {
        btnAddPortfolio.setAttribute('data-dismiss', '');
        alert("Please fill out field");
    }
});

//Edit portfolio:
let btnEditPortfolio = document.querySelectorAll('.btn-edit-portfolio');
let inputIdPortfolio = document.querySelectorAll('.input-id-portfolio');
let inputCategoryPortfolio = document.querySelectorAll('.input-category-portfolio');
let btnSavePortfolio = document.querySelectorAll('.btn-save-portfolio');
let idPortfolio = document.querySelectorAll('.id-portfolio');
let categoryPortfolio = document.querySelectorAll('.category-portfolio');

for(let i=0; i<categoryPortfolio.length; i++){
    btnEditPortfolio[i].addEventListener('click', function(){
        inputIdPortfolio[i].value = idPortfolio[i].textContent;
        inputCategoryPortfolio[i].value = categoryPortfolio[i].textContent;
    });
    btnSavePortfolio[i].addEventListener('click', function(){
        idPortfolio[i].textContent = inputIdPortfolio[i].value;
        categoryPortfolio[i].textContent = inputCategoryPortfolio[i].value;
    });
};

//Delete portfolio:
let btnDeletePortfolio = document.querySelectorAll('.btn-delete-portfolio');

for (let i = 0; i < categoryPortfolio.length; i++) {
    btnDeletePortfolio[i].addEventListener('click', function () {
      var index;
      for (let j = 0; j < tablePortfolio.rows.length; j++)
        if (tablePortfolio.rows[j].cells[1].textContent == categoryPortfolio[i].textContent) {
          index = j;
          break;
        }
      tablePortfolio.deleteRow(index);
    });
  };