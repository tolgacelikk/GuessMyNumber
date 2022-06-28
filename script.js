/* console.log(document.querySelector('.number ').textContent)
console.log(document.querySelector('.guess').textContent)
console.log(document.querySelector('.label-score').textContent)
 */


 let secretnumber=Math.trunc(Math.random()*20+1)

console.log(secretnumber)
let score=20
let highscore=0
document.querySelector('.check').addEventListener('click',function(){
    let guess=(Number(document.querySelector('.guess').value))
    
    console.log(guess,typeof(guess))
    /////When there is no input
    if(!guess){
        (document.querySelector('.message')).textContent='There İs No Number'
    }
    ///When Player Wins
    else if(guess===secretnumber ){
        document.querySelector('.message').textContent='Correct Number'
        document.querySelector('body').style.backgroundColor='#125678'
        document.querySelector('.number').textContent=secretnumber
       
        if(score>highscore){
            score==highscore
            document.querySelector('.highscore').textContent=score
        }
    }
    //// When guess is too high
    else if(guess>secretnumber&&score>0){
        document.querySelector('.message').textContent='Too High'
        score--
        document.querySelector('.score').textContent=score
        
    }
    //// When Secret Number is too high
    else if(secretnumber>guess){
        document.querySelector('.message').textContent='Too Low'
        score--
        document.querySelector('.score').textContent=score
    }
    if(score==0){
        document.querySelector('.message').textContent='You Lost the Game'
    }
   
})
document.querySelector('.again').addEventListener('click',function(){
    score=20
    document.querySelector('.number').textContent='?'
    document.querySelector('.message').textContent='Start Guessing'
    document.querySelector('.score').textContent=20
    document.querySelector('body').style.background='#222'
})
