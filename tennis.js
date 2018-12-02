
let scoreA = 0
let scoreB = 0
const pointTable = ['0', '15', '30', '40','setpoint']

const scoreBoard = (function () {
    let scoreA = 0
    let scoreB = 0

    const aGetPoint = () => {
      const playerA = playerScore(scoreA, scoreB)
      if(playerA('isMatchPoint'))
        return 'A WIN'
      else if(playerA('isSetPoint'))
        scoreB = 3
      else
        scoreA++
      return printScoreBoard(scoreA,scoreB)
    }

    const bGetPoint = () =>{
      const playerB = playerScore(scoreB, scoreA)
      if(playerB('isMatchPoint'))
        return 'B WIN'
      else if(playerB('isSetPoint'))
        scoreA = 3
      else
        scoreB++
      return printScoreBoard(scoreA,scoreB)
    }

    const playerScore = (player1, player2) => {
      return (condition) => {
        if(condition === 'isMatchPoint')
          return isPlayerMatchPoint(player1, player2)
        else
          return isPlayerSetpoint(player1, player2)
      }
    }

    const isPlayerMatchPoint = (player1, player2) =>
      (player1 === 3 && player2 < 3) || (player1 === 4 && player2 === 3)

    const isPlayerSetpoint = (player1, player2) =>
      (player1 === 3 && player2 === 4) && (scoreA >=3 && scoreB >=3)

    const printScoreBoard = (a,b) => `${pointTable[a]} - ${pointTable[b]}`

    const resetScore = () => {
      scoreA = 0
      scoreB = 0
    }

    return {
        aGetPoint,
        bGetPoint
    }
})

module.exports = { scoreBoard }
