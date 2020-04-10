
/*

PIEDRA PAPEL O TIJERA

  1. preguntar si quiere jugar (queda mejor si juega una vez y luego pregunta si quiere seguir jugando)
  2. Solicitar eleccion al jugador.
  3. Generar eleccion aleatoria a la cpu.
  4. Evaluar quien gano.
  5. Imprimir quien gano.

*/

//VARIABLES

let choicePlayer = 'piedra'
let choiceCpu = 'papel'

//Evaluar quien gano.

function whoWin(choicePlayer, choiceCpu) {
  if(choicePlayer === 'piedra') {
    if(choiceCpu === 'papel') {
      console.log('CPU won!!!')
    } else {
      console.log('You won !!!')
    }
  }
  if(choicePlayer === 'papel') {
    if(choiceCpu === 'tijera') {
      console.log('CPU won!!!')
    } else {
      console.log('You won !!!')
    }
  }
  if(choicePlayer === 'tijera') {
    if(choiceCpu === 'piedra') {
      console.log('CPU won!!!')
    } else {
      console.log('You won !!!')
    }
  }
}