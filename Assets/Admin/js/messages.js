let tableMessage = document.querySelector('.table');
let idMessage = document.querySelectorAll('.id-message');
let btnDeleteMessage = document.querySelectorAll('.btn-delete-message');

for (let i = 0; i < btnDeleteMessage.length; i++) {
    btnDeleteMessage[i].addEventListener('click', function () {
      var index;
      for (let j = 0; j < tableMessage.rows.length; j++)
        if (tableMessage.rows[j].cells[0].textContent == idMessage[i].textContent) {
          index = j;
          break;
        }
      tableMessage.deleteRow(index);
    });
  };