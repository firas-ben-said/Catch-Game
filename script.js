let begin = false;
start_button = document.querySelector("button")
.addEventListener()
document.addEventListener('DOMContentLoaded', function() {
    const bowl = document.querySelector('.bowl');
    const fallingBall = document.querySelector('.fallingBall');
    const scoreDisplay = document.getElementById('score');
    const gameArea = document.querySelector('.game-area');
    let score = 0;
    let speed = 5; // Initial falling speed
    let isBallFalling = true;
    body = document.querySelector("body")
    // Set initial position for the bowl
    let bowlPosition = gameArea.offsetWidth / 2 - bowl.offsetWidth / 2;
    bowl.style.left = bowlPosition + 'px';

    // Function to move the bowl
    

    // Event listeners for MOUSE MOVE movement of the bowl
    document.addEventListener("mousemove", function(event) {
        // Update the position of the div to follow the mouse pointer
        bowl.style.left = (event.pageX - bowl.clientWidth / 2) + "px";
      });


    // Function to move the falling ball
    function moveFallingBall() {
        if (isBallFalling) {
            const ballPosition = fallingBall.getBoundingClientRect();
            fallingBall.style.top = ballPosition.top + speed + 'px';
            checkBallCatch();
            if (ballPosition.bottom >= gameArea.offsetHeight) {
                resetBall();
            }
        }
    }

    // Event listener for checking ball catch
    function checkBallCatch() {
        const bowlPosition = bowl.getBoundingClientRect();
        const ballPosition = fallingBall.getBoundingClientRect();

        if (
            ballPosition.bottom >= bowlPosition.top &&
            ballPosition.left >= bowlPosition.left &&
            ballPosition.right <= bowlPosition.right
        ) {
            score++;
            speed += 0.8;
            scoreDisplay.textContent = 'Score: ' + score;
            resetBall();
        }
    }

    // Function to reset the ball to the top
    function resetBall() {
        fallingBall.style.top = 0;
        fallingBall.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - fallingBall.offsetWidth)) + 'px';
    }

    // Function to increase falling speed over time
    function increaseSpeed() {
        speed += 0.01;
    }

    // Set interval to move the falling ball down the screen and increase speed
    setInterval(function() {
        moveFallingBall();
        increaseSpeed();
    }, 100);

    // Initial position of the falling ball
    resetBall();
});
