let h2 = document.getElementById('log')
let h1 = document.getElementById('log-player')

function start(){
h1.innerHTML = 'Jogador X'
PlayerX()

function PlayerX(){
    if(h1.innerHTML === 'Jogador X'){
        $('.box').click( box => {
            box.target.style.color = 'red'
            box.target.innerHTML = 'x'
            h1.innerHTML = 'Jogador O'
            return PlayerO();
         
           
        })        
    }
}

function PlayerO(){
    if(h1.innerHTML === 'Jogador O'){
        $('.box').click( box => {
            box.target.style.color = 'green'
            box.target.innerHTML = 'o'
            h1.innerHTML = 'Jogador X'
           
            return PlayerX(), verify() ;
        })
    }
}




function verify(){
   let box = $('.box')

if(box[0].innerHTML !== '' && box[1].innerHTML !== '' ){
console.log('completo')
}

}




}



