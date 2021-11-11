const gameBoard = document.querySelector('.game-board');
const card = document.querySelectorAll('card');

const teamsArray = ['lakers', 'celtics', 'raptors', 'maverics', 'knicks', 'nets', 'lakers', 'celtics', 'raptors', 'maverics', 'knicks', 'nets'];
const shuffledArray = teamsArray.sort((a, b) => 0.5 - Math.random());
const arrayLenght = teamsArray.length;

let round = 1;



/// tworzenie planszy z grą \\\

for (let i = 0; i < arrayLenght; i++) {
    let newCard = document.createElement('div');
    gameBoard.appendChild(newCard);
    newCard.classList.add('card');

    /// trzeba później zamienić klasę Hide z back na front \\\

    let newBack = document.createElement('div');
    newCard.appendChild(newBack);
    newBack.classList.add('card-back', 'hide');

    let backContent = document.createElement('img');
    newBack.appendChild(backContent);
    backContent.src = 'images/logo.png';
    backContent.classList.add('back-content')

    let newFront = document.createElement('div');
    newCard.appendChild(newFront);
    newFront.classList.add('card-front')

    let frontContent = document.createElement('img');
    newFront.appendChild(frontContent);

    let randomTeam = shuffledArray[i];


    frontContent.src = "images/" + randomTeam + ".png"


    frontContent.classList.add('front-content');

    /// zakrywanie kart \\\

    setTimeout(() => {
        newFront.classList.add('hide');
        newBack.classList.remove('hide');
    }, 3000);

}



const cardBack = document.querySelectorAll('.card-back');

/// sprawdzanie poprawności \\\

function turnBack() {
    
    setTimeout(() => {

        if (document.querySelectorAll('.opened-front').length == 2) {

            document.querySelectorAll('.opened-front').forEach(element => {
                element.classList.toggle('hide')
            });

            document.querySelectorAll('.opened-back').forEach(element => {
                element.classList.toggle('hide')
            });

            document.querySelectorAll('.opened-front').forEach(element => {
                element.classList.remove('opened-front')
            });

            document.querySelectorAll('.opened-back').forEach(element => {
                element.classList.remove('opened-back')
            });

        }


    }, 1000);
}

function goodJob() {
    
    setTimeout(() => {
        document.querySelectorAll('.opened-front').forEach(element => {
            element.parentElement.classList.add('opa')
        });

        document.querySelectorAll('.opened-front').forEach(element => {
            element.classList.remove('opened-front')
        });

        document.querySelectorAll('.opened-back').forEach(element => {
            element.classList.remove('opened-back')
        });
    }, 300);


}

function ifOpen() {
    const currentOpened = document.querySelectorAll('.opened-front');


    if (currentOpened.length == 2) {
        if (currentOpened[0].querySelector('img').src == currentOpened[1].querySelector('img').src) {
            goodJob()
        }
        else {
            turnBack()
        }
    }
}



/// odkrywanie kart \\\

cardBack.forEach(element => {

   
   
    element.addEventListener('click', function (e) {

        let opened = document.querySelectorAll('.opened-front');
        

        if (opened.length < 2) {
            this.classList.toggle('hide');
            this.classList.toggle('opened-back');
            this.nextElementSibling.classList.toggle('hide');
            this.nextElementSibling.classList.toggle('opened-front');
            ifOpen()
       


        }
        else {
            return false
        };

    })


   
});


