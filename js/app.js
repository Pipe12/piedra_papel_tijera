
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
let choiceCpu
let playAgain
let winner

// Solicitar eleccion del jugador
function getPlayerChoice() {
  let choicePlayer = prompt(`Escriba con cual quiere jugar PIEDRA, PAPEL o TIJERA ??`)
  return choicePlayer
}

// Generar eleccion CPU
function generateCpuChoice() {
  let randomNumber = Math.floor(Math.random()*100)

  if(randomNumber >= 0 && randomNumber < 34) {
    return `piedra`
  } else if(randomNumber > 33 && randomNumber < 67) {
    return `papel`
  } else {
    return `tijera`
  }
}

//Evaluar quien gano.
//Usando una estructura switch
function whoWinWithSwitch(choicePlayer, choiceCpu) {
  
  if(choicePlayer === choiceCpu) {
    return `Empate`
  }

  switch(choicePlayer) {
    case 'piedra': 
    return choiceCpu === 'papel' ? 'CPU won !!!' : 'You won !!!'
    break
    case 'papel': 
    return choiceCpu === 'tijera' ? 'CPU won !!!' : 'You won !!!'
    break
    case 'tijera': 
    return choiceCpu === 'piedra' ? 'CPU won !!!' : 'You won !!!'
    break
    default:
    return `${choicePlayer} no es una opcion valida.`
  }
}

//Usando la estructura if
function whoWinWithIf(choicePlayer, choiceCpu) {
  if(choicePlayer === choiceCpu) {
    return `Empate`
  }
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


//Programa secuencial del juego de piedra, papel o tijera.
do {
  choicePlayer = getPlayerChoice()
  choiceCpu = generateCpuChoice()
  winner = whoWinWithSwitch(choicePlayer, choiceCpu)
  console.log(winner)  
  playAgain = prompt(`Por favor digite 'y' si quiere seguir jugando o cualquier letra si desea terminar el juego.`)
} while(playAgain === 'y')

