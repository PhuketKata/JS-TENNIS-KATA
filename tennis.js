
let scoreA = 0
let scoreB = 0
const pointTable = ['0', '15', '30', '40','setpoint']

const aGetPoint = () => {
  scoreA++
  return setScoreboard(scoreA,scoreB)
}
const bGetPoint = () =>{
  scoreB++
  return setScoreboard(scoreA,scoreB)
}
const setScoreboard = (a,b) =>{

  let scoreLeft = a
  let scoreRight = b
  if(b>3 && b === a){
    scoreLeft = b
    scoreRight = 3
  }else if(a>3 && a === b){
    scoreLeft = a
    scoreRight = 3
  }else if(b>a){
    scoreLeft = b
    scoreRight = a
  }
  return `${pointTable[scoreLeft]} - ${pointTable[scoreRight]}`
}
const resetScore = () => {
  scoreA = 0
  scoreB = 0
}

module.exports = {
  aGetPoint:aGetPoint,
  resetScore:resetScore,
  bGetPoint:bGetPoint
}
