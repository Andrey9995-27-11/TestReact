import { Variants } from './props'

export function calculateWinner(squares: Array<Variants>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [c1, c2, c3] = lines[i]
    if (
      squares[c1] &&
      squares[c1] === squares[c2] &&
      squares[c1] === squares[c3]
    ) {
      return squares[c1]
    }
  }
  return null
}
