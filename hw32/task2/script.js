const navUlMeny = document.querySelector('.hidden-menu');
const a = document.querySelector('.clik-for-show-menu');
function showHiddeMenu(params) {
    navUlMeny.classList.toggle("open")
}
a.addEventListener('click', showHiddeMenu)