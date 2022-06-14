const show_hide_btn = document.querySelector('.show-hide-btn')
const board = document.querySelector('.board')
console.log(show_hide_btn);
console.log(board);
show_hide_btn.addEventListener('click', () => {
    board.classList.toggle('hide')
})