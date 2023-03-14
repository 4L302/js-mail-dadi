/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const btnSubmit = document.getElementById('submit');
const btnStartGame = document.getElementById('startGame');

const emailList = [
    'example1@gmail.com',
    'example2@gmail.com',
    'example3@gmail.com',
    'example4@gmail.com',
    'example5@gmail.com'
]

if (btnSubmit) {
    btnEmail.addEventListener('click', function () {
        reload.preventDefault();
    })
}

if (btnSubmit) {
    btnSubmit.addEventListener('click', function () {
        emailBox = document.getElementById('emailBox').value;
        emailResult = document.getElementById('emailResult');
        let result = false;
        for (i = 0; i < emailList.length; i++) {
            if (emailBox.toLowerCase() === emailList[i].toLowerCase()) {
                result = true;
            }
        }
        if (result) {
            emailResult.innerHTML = `<h2 class="text-success">E-mail valida</h2>`;
        } else {
            emailResult.innerHTML = `<h2 class="text-danger"> E-mail non valida </h2>`;
        }
    })
}

if (btnStartGame) {
    btnStartGame.addEvenListener('click', function () {
        let userNumber = rndNumnber(1, 6);
        let computerNumber = rndNumber(1, 6);
        const userNumberBox = document.getElementById('userNumber');
        const computerNumberBox = document.getElementById('computerNumber');
        const resultGameBox = document.getElementById('resultGame');

        userNumberBox.innerHTML = `<h3>${userNumber}</h3>`;
        computerNumberBox.innerHTML = `<h3>${computerNumber}</h3>`;

        if (userNumber < computerNUmber) {
            resultGameBox.innerHTML = `<h2 class="text-danger fw-bold">Ha vinto il pc</h2>`;
        } else if (userNumber === computerNumber) {
            resultGameBox.innerHTML = `<h2 class="text-warning fw-bold">Pareggio</h2>`;
        } else {
            resultGameBox.innerHTML = `<h2 class="text-success fw-bold">Hai vinto!</h2>`;
        }
    })
}

function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}