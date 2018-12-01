const scoreBoard = require('./tennis');

beforeEach(() => {
  return scoreBoard.resetScore()
})

test('AGet15PointAndBGet0Point', () => {
  const { aGetPoint } = scoreBoard
  const score = aGetPoint()
  expect(score).toBe('15 - 0')
})

test('AGet30PointAndBGet0Point', () => {
  const { aGetPoint } = scoreBoard
  aGetPoint()
  const score = aGetPoint()
  expect(score).toBe('30 - 0')
})

test('AGet40PointAndBGet0Point', () => {
  const { aGetPoint } = scoreBoard
  aGetPoint()
  aGetPoint()
  const score = aGetPoint()
  expect(score).toBe('40 - 0')
})

test('AGet40AndBGet15Point', () => {
  const { aGetPoint, bGetPoint } = scoreBoard
  aGetPoint()
  aGetPoint()
  aGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 15')
})

test('AGet40AndBGet30Point', () => {
  const { aGetPoint, bGetPoint } = scoreBoard
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 30')
})

test('AGet40AndBGet40Point', () => {
  const { aGetPoint, bGetPoint } = scoreBoard
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  const score = bGetPoint()
  expect(score).toBe('40 - 40')
})

test('AGetSetPointAndBGet40Point', () => {
  const { aGetPoint, bGetPoint } = scoreBoard
  aGetPoint()
  aGetPoint()
  aGetPoint()
  bGetPoint()
  bGetPoint()
  bGetPoint()
  const score = aGetPoint()
  expect(score).toBe('setpoint - 40')
})
