
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
    return choiceCpu === 'papel' ? 'CPU won !!!' : 'You won !!!'
  }
  if(choicePlayer === 'papel') {
    return choiceCpu === 'tijera' ? 'CPU won !!!' : 'You won !!!'
  }
  if(choicePlayer === 'tijera') {
    return choiceCpu === 'piedra' ? 'CPU won !!!' : 'You won !!!'
  }
}