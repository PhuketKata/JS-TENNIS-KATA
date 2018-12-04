const scoreBoard = require('./tennis');

test('AGet15PointAndBGet0Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  const score = aGetPoint()
  expect(score).toBe('15 - 0')
})

test('AGet30PointAndBGet0Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  const score = aGetPoint()
  expect(score).toBe('30 - 0')
})

test('AGet40PointAndBGet0Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  const score = aGetPoint()
  expect(score).toBe('40 - 0')
})

test('AGet40AndBGet15Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 15')
})

test('AGet40AndBGet30Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 30')
})

test('AGet40AndBGet40Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 40')
})

test('AGetSetPointAndBGet40Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  const score = aGetPoint()
  expect(score).toBe('setpoint - 40')
})

test('AGet40AndBGetSetPointPoint', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - setpoint')
})

test('AGet40AndBGet40PointAfterASetPoint', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  aGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 40')
})

test('AGet40AndBGet40PointAfterBSetPoint', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  const score = aGetPoint() //correct
  expect(score).toBe('40 - 40')
})

test('AWINAndBGet30Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  const score = aGetPoint() //correct
  expect(score).toBe('A WIN')
})

test('BWINAndAGet30Point', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  const score = bGetPoint() //correct
  expect(score).toBe('B WIN')
})

test('AWINAndBGet40PointWithSetPoint', () => {
  const { scoreBoard : createScoreBoard } = scoreBoard
  const scoreBoardSet = createScoreBoard()
  const { aGetPoint, bGetPoint } = scoreBoardSet
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  aGetPoint()
  const score = aGetPoint() //correct
  expect(score).toBe('A WIN')
})
