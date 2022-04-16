let h1 = document.getElementById('log-player')
let btn = document.getElementById('btn')
let box = document.querySelectorAll('.box')

let playerX;
let playerO;

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function Start() {
    for (var el of box) {
        if (el !== '') {
            el.textContent = ''
            el.classList.remove('X') ? el.classList.remove('X') : el.classList.remove('O')
            el.removeAttribute("style")
        } else {
            return
        }
    }
    btn.style.display = 'none'
    h1.innerHTML = ''

    for (var el of box) {
        el.addEventListener('click', (e) => { Turn(e) }, { once: true })
    }


    function PlayerX(e) {
        let addWin;
        let EndGame = Empate();
        console.log(EndGame)
        if(EndGame){
            h1.innerHTML = 'Empate'
        }
        e.target.classList.add('X')
        h1.innerHTML = 'Jogador X'
        e.target.style.color = 'red'
        e.target.innerHTML = 'x'
        playerX = false
        playerO = true
        addWin = Verify('X')
    
        if (addWin) {
            h1.innerHTML = 'Player (X) Foi o vencedor';
            btn.style.display = 'block'
            btn.textContent = 'Reniciar o jogo'


        }
    }

    function PlayerO(e) {
        let addWin;
        let EndGame = Empate();
        console.log(EndGame)
        if(EndGame){
            h1.innerHTML = 'Empate'
        }

        e.target.classList.add('O')
        h1.innerHTML = 'Jogador O'
        e.target.style.color = 'green'
        e.target.innerHTML = 'O'
        playerO = false
        playerX = true
        addWin = Verify('O')
 
        if (addWin) {
            h1.innerHTML = 'Player ( O ) Foi o vencedor';
            btn.style.display = 'block'
            btn.style.display = 'block'
            btn.textContent = 'Reniciar o jogo'
       
        }
    }


    function Turn(e) {
        if (playerX == true) {
            playerO = false
            return PlayerX(e)
        } else {
            playerO = true
            return PlayerO(e);
        }

    }

    return
}

function Verify(targetPlayer) {
    return winner.some(comb => {
        return comb.every(index => {
            return box[index].classList.contains(targetPlayer)
        })
    })
    
}

function Empate(){
        return [... box].every(target =>{
            target.classList.contains('X') || target.classList.contains('O'); 
     })
}