
let scoreA = 0
let scoreB = 0
const pointTable = ['0', '15', '30', '40']

const aGetPoint = () => {
  scoreA++
  return setScoreboard(scoreA,scoreB)
}
const bGetPoint = () =>{
  scoreB++
  return setScoreboard(scoreA,scoreB)
}
const setScoreboard = (a,b) =>{
  return `${pointTable[a]} - ${pointTable[b]}`
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
