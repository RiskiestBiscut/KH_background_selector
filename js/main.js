document.querySelector('#kingdomKey').addEventListener('click', destiny)
document.querySelector('#ladyLuck').addEventListener('click', wonderland)
document.querySelector('#oplympia').addEventListener('click', olympus)
document.querySelector('#jungleKing').addEventListener('click', jungle)
document.querySelector('#threeWishes').addEventListener('click', agrabah)
document.querySelector('#pumpkinHead').addEventListener('click', halloween)
document.querySelector('#wishingStar').addEventListener('click', monstro)
document.querySelector('#crabClaw').addEventListener('click', atlantica)
document.querySelector('#fairyHarp').addEventListener('click', neverland)
document.querySelector('#divineRose').addEventListener('click', bastion)
document.querySelector('#spellbinder').addEventListener('click', traverse)


function destiny() {
    document.querySelector('body').style.background = 'url(images/destinyIsland_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Destiny Island'
    document.querySelector('h2').style.color = 'white'
}

function wonderland() {
    document.querySelector('body').style.background = 'url(images/aliceInwonderland_background.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Wonderland'
    document.querySelector('h2').style.color = 'white'
}

function olympus() {
    document.querySelector('body').style.background = 'url(images/olympus_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Olympus'
    document.querySelector('h2').style.color = 'white'
}

function jungle() {
    document.querySelector('body').style.background = 'url(images/deepJungle_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Deep Jungle'
    document.querySelector('h2').style.color = 'white'
}

function agrabah() {
    document.querySelector('body').style.background = 'url(images/Agrabah_background.png)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Agrabah'
    document.querySelector('h2').style.color = 'white'
}

function halloween() {
    document.querySelector('body').style.background = 'url(images/halloweenTown_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Halloween Town'
    document.querySelector('h2').style.color = 'white'
}

function monstro() {
    document.querySelector('body').style.background = 'url(images/Monstro_background.webp)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Monstro'
    document.querySelector('h2').style.color = 'white'
}

function atlantica() {
    document.querySelector('body').style.background = 'url(images/atlantica_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Atlantica'
    document.querySelector('h2').style.color = 'white'
}

function neverland() {
    document.querySelector('body').style.background = 'url(images/neverland_background.png)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Neverland'
    document.querySelector('h2').style.color = 'white'
}

function bastion() {
    document.querySelector('body').style.background = 'url(images/hollowbastion_background.png)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Hollow Bastion'
    document.querySelector('h2').style.color = 'white'
}

function traverse() {
    document.querySelector('body').style.background = 'url(images/traversetown_background.jpeg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('h1').innerHTML = 'Traverse Town'
    document.querySelector('h2').style.color = 'white'
}