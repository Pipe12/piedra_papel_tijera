
/*

PIEDRA PAPEL O TIJERA

  1. preguntar si quiere jugar (queda mejor si juega una vez y luego pregunta si quiere seguir jugando)
  2. Solicitar eleccion al jugador.
  3. Generar eleccion aleatoria a la cpu.
  4. Evaluar quien gano. ok
  5. Imprimir quien gano.

*/

//VARIABLES

let choicePlayer
let choiceCpu = 'papel'
let playAgain

// Solicitar eleccion del jugador

function getPlayerChoice() {
  return (prompt(`Escriba con cual quiere jugar PIEDRA, PAPEL o TIJERA ??`))
}

// Generar eleccion CPU

function generateCpuChoice() {
  let randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)
}

//Evaluar quien gano.

function whoWin(choicePlayer, choiceCpu) {
  if(choicePlayer === 'piedra') {
    return choiceCpu === 'papel' ? 'CPU won !!!' : 'You won !!!'
  }
  if(choicePlayer === 'papel') {
    return choiceCpu === 'tijera' ? `CPU won !!!` : `You won !!!`
  }
  if(choicePlayer === 'tijera') {
    return choiceCpu === 'piedra' ? 'CPU won !!!' : 'You won !!!'
  }
}

//Comienza el juego de piedra, papel o tijera.



// do {
//   choicePlayer = getPlayerChoice()
//   console.log(choicePlayer)

//   playAgain = prompt(`Por favor digite 'y' si quiere seguir jugando o cualquier letra si desea terminar el juego.`)

// } while(playAgain === 'y')

