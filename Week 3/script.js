
function startGame(){
    var buttons = document.querySelectorAll('.userchoice');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            endGame(button.value);
        });
    });
}

function randomMove(){
    return Math.floor(Math.random() * 3);

}

function endGame(move) {
    let message = document.getElementsByClassName('message')[0];
    comp=randomMove();
    result=calcResult(move,comp);
    postScript(move,comp);
    if (result=='w'){
        message.innerHTML="Victory!";
        reset();
    }
    else if (result=='d'){
        message.innerHTML="Draw!";
        reset();
    }
    else{
        message.innerHTML="Defeat!";
        reset();
    }
}

function calcResult(user,comp){
    if (user==0){
        if (comp==0){
            return 'd';
        }
        else if (comp==1){
            return 'l';
        }
        else{
            return 'w';
        }
    }
    else if (user==1){
        if (comp==0){
            return 'w';
        }
        else if (comp==1){
            return 'd'
        }
        else{
            return 'l';
        }
    }
    else if (user==2){
        if (comp==0){
            return 'l';
        }
        else if (comp==1){
            return 'w';
        }
        else{
            return 'd';
        }
    }
    return 0;
}

function reset() {
    document.getElementsByClassName('choice1')[0].classList.toggle('hide');
    document.getElementsByClassName('choice2')[0].classList.toggle('hide');
    document.getElementById('retry').addEventListener('click', function() {
        location.reload();
    });
    document.getElementById('exit').addEventListener('click', function() {
        window.close();
    });
}

function postScript(user,comp){
    list=['Rock','Paper','Scissors']
    document.getElementById('player').classList.toggle('hide');
    document.getElementById('computer').classList.toggle('hide');
    document.getElementById('usermove').innerHTML=list[user];
    document.getElementById('compmove').innerHTML=list[comp];
}


startGame();