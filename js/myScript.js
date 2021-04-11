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
        barDiv.style.right = '.780px';
        barDiv.style.transition = '500ms';
    })
}

function Reclicker () {
    iconCross.addEventListener('click', function() {
        barDiv.style.display = 'none';
        iconBar.style.display = 'block';
        logo.style.display = 'block';
        container.style.padding = '15px';
        rowIndo.style.display = 'block';
        barDiv.style.right = '.780px';
        barDiv.style.transition = '500ms';
    })
}

clicker();
Reclicker();
