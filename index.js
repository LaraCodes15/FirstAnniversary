//Setting up the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Messages to print on screen
const welcome_message1 = "Happy anniversary, crumpet ❤️";
const welcome_message2 ="I love you to the 🌙 and back."
const game_introduction = "Now, I want to play a game with you 🤡...";
const button_info = "Press the button when you're ready!"

// calculate font size as a percentage of the window width, adding font settings
const fontSizePercentage = 4; // Adjust this percentage as needed
const fontSize = (canvas.width * fontSizePercentage) / 100;
ctx.font = `${fontSize}px 'Playfair Display SC', serif`; // Specify "Playfair Display SC" as the primary font and fallback to serif
ctx.fillStyle = "yellow";
ctx.textAlign = "center";

//Variables and constants for the typewriting function
const speed = 150;
let i = 0;
let text_to_print = "";

//Animates the game
function animate() {

    //Printing the welcome message etc.
    typeOnCanvas(welcome_message1, () => {
        text_to_print = ""
        clearCanvas(() => {
            // Introduce a delay before starting the second message
            setTimeout(() => {
                typeOnCanvas(welcome_message2, () => {
                    text_to_print=""
                    clearCanvas(() => {
                        // Introduce a delay before starting the second message
                        setTimeout(() => {
                            typeOnCanvas(game_introduction, ()=>{
                                text_to_print = ""
                                clearCanvas(()=>{
                                    setTimeout(() => {
                                        typeOnCanvas(button_info,()=>{
                                            text_to_print=""
                                            clearCanvas(()=>{
                                                showPlayButton()
                                            })
                                        })
                                })
                            });
                        }, speed);
                });
            }, speed);
        });
    });
})
})
}

function typeOnCanvas(message, callback) {
    if (i < message.length) {
        text_to_print += message.charAt(i);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(text_to_print, canvas.width / 2 + 20, canvas.height / 2);
        i++;
        setTimeout(function () {
            typeOnCanvas(message, callback);
        }, speed);
    } else {
        i = 0; // Reset i for the next message
        if (callback) {
            callback();
        }
    }
}

function clearCanvas(callback) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (callback) {
        callback();
    }
}

function showPlayButton() {
    const playButton = document.createElement('button');
    playButton.textContent = 'Start the Game!';
    playButton.id = 'playButton';
    playButton.style.borderRadius = '10%';
    playButton.style.position = 'absolute';
    playButton.style.top = '50%'
    playButton.style.left = '50%';
    playButton.style.transform = 'translate(-50%, -50%)';
    playButton.style.padding = '15px';
    playButton.style.fontSize = '20px';
    playButton.style.fontFamily = `'Playfair Display SC', serif`;
    playButton.style.backgroundColor = 'green';
    playButton.style.color = 'white';
    document.body.appendChild(playButton);

    // Start the game on button click or touch
    const playButtonElement = document.getElementById('playButton');
    playButtonElement.addEventListener('click', handlePlayButtonClick);
    playButtonElement.addEventListener('touchend', handlePlayButtonClick);
}

function handlePlayButtonClick() {
    console.log("Button clicked!");
    location.href = './game.html';
}

animate();

