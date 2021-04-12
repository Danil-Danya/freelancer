let iconBar = document.querySelector('.icon-bar');
let barDiv = document.querySelector('.link__container__mobile');
let logo = document.querySelector('.logo');
let container = document.querySelector('.container');
let rowIndo = document.querySelector('.row__info');
let iconCross = document.querySelector('.icon-cross');

function clicker () {
    iconBar.addEventListener('click', function() {
        barDiv.style.display = 'block';
        iconBar.style.display = 'none';
        logo.style.display = 'none';
        container.style.padding = 0;
        rowIndo.style.display = 'none';
        barDiv.style.animation = 'menuBarTransition 500ms'

    })
}

function Reclicker () {
    iconCross.addEventListener('click', function() {
        barDiv.style.display = 'none';
        logo.style.display = 'block';
        container.style.padding = '0 15px';
        rowIndo.style.display = 'block';
        barDiv.style.animation = 'reMenuBarTransition 500ms'
    })
    if (window.innerWidth < 780) {
        iconBar.setAttribute('style', 'display: block;')
    } else if (window.innerWidth > 780) {
        iconBar.removeAttribute('style', 'display: block;')
        iconBar.setAttribute('style', 'display: none;')
    }
    setTimeout(() => Reclicker(), 10);
}


clicker();
Reclicker();
