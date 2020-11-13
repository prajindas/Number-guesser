/*
game functions
-players must enter number between min and max
-player get sertain amount of guesses 
-notyify players of guess remaining
-notify players of the correct answer id loose
-let players choce to play again
 */


//game values
let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

//UL elemnts
 const minNum =document.querySelector('.min-num');
 const maxNum =document.querySelector('.max-num');
 const game =document.querySelector('#game');
 const guessBtn =document.querySelector('#guess-btn');
 const guessInput =document.querySelector('#guess-input');
 const message =document.querySelector('.message')

 //Assihn UI min and max

 minNum.textContent=min;
 maxNum.textContent=max;

//add event for try again
game.addEventListener('mousedown', function(e){
    if(e.target.className=='play-again'){
        window.location.reload();
    }
}) 

 //add event
 guessBtn.addEventListener('click', function(){
     let guess=parseInt(guessInput.value)
     
    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter the number between ${min} and ${max}`, 'red')
    }else{

    //check if won
    if(guess == winningNum){
        //gaem over -win
        gameOver(true,`${winningNum} is currect, YOU WIN!!`)
    }else{
        //wrong number
        guessesLeft =guessesLeft -1;

        if(guessesLeft == 0){
            //game over -lost
           gameOver(false,`Game over,you lost. The currect number was ${winningNum}`)
    
        }else{
            //game continue
             //change border color
             guessInput.style.borderColor ='red'

             //clear input
             guessInput.value =''
    
             //set meggage
             setMessage(`${guess} is not currect, ${guessesLeft} guess left`, 'red')
        }
    }
}
   
 })
//game over

function gameOver(won , msg){
let color;
won === true ? color='green': color ='red';
//disable input
guessInput.disabled= true;
        
//change border color
guessInput.style.borderColor =color

//message color
message.style.color =color

//set meggage
setMessage(msg)

//play again button
guessBtn.value = 'play again';
//add class
guessBtn.className += 'play-again'

}
//get random numbers
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
    // console.log(parseInt(Math.random()*(max-min+1)+min))
}

 //set message
 function setMessage(msg,color){
     message.style.color= color
     message.textContent= msg
 }