// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
//get ball element
const ball = document.querySelector('.ball');
//ball position x
let ballPositionX = 0
let ballVelocityX = 1
//ball position y
let ballPositionY = 0
let ballVelocityY = 1

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {
    //update X/Y ball's position
    ballPositionX += ballVelocityX
    ball.style.left = ballPositionX + "px"

    ballPositionY += ballVelocityY
    ball.style.top = ballPositionY + "px"

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    
    //change direction if it hits wall
    ballVelocityX += 0.2
    ballVelocityY += 0.2
    //if it hits bottom
    if(ballPositionY > 480) {
        ballVelocityY *= -1
        //resets position
        ballPositionY = 480
        //if it hits right
    } else if (ballPositionX >= 680) {
        ballVelocityX *= -1
        ballPositionX = 680
        //if it hits top
    } else if (ballPositionY <= 0) {
        ballVelocityY *= -1
        ballPositionY = 0
    } else if (ballPositionX <= 0) {
        ballVelocityX *= -1 
        ballPositionX = 0
    }
    
    

}

// Call the update() function every 35ms
setInterval(update, 35);
