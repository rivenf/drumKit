let buttons = document.querySelectorAll('.drum');
for (let btn of buttons) {
    btn.addEventListener("click", function(){playDrum(this.innerHTML);});
};

document.addEventListener("keydown", function(e){playDrum(e.key);});

function playDrum(letter){
    switch (letter) {
        case 'w':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 'a':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 's':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 'd':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 'j':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 'k':
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        case 'l':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            buttonAnimate(letter);
            //console.log(letter);
            break;

        default:
            //console.log(letter + ' is not a drum');
            break;
    };
};

function buttonAnimate(currentLetter){
    let active = document.querySelector("." + currentLetter);
    active.classList.add('pressed');
    setTimeout(function(){active.classList.remove('pressed');}, 200);
}