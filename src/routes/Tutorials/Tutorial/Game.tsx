import React from 'react'
import { Board } from './Board'
import { ToDo } from './ToDo'
import { calculateWinner } from './functions'
import { GameState, OnClickType, Variants } from './props'
import './styles.css'

/**
 * Used in App
 @category TestReact
 */
export class Game extends React.Component<any, GameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      history: [{ squares: Array(9).fill(''), current: Variants.X }],
      current: Variants.X,
    }
  }

  get getCurrentSquares() {
    return this.state.history[this.state.history.length - 1].squares
  }

  public onClickHandler: OnClickType = (event, i) => {
    event?.preventDefault()
    this.setState((state) => {
      const squares = state.history[state.history.length - 1].squares.slice()
      if (calculateWinner(squares) || squares[i]) return state
      const value = (squares[i] = Variants[state.current])
      return {
        history: state.history.concat([
          {
            squares,
            current: value,
          },
        ]),
        current: value,
      }
    })
  }

  public onClickHistoryHandler: OnClickType = (event, i) => {
    event?.preventDefault()
    this.setState((state) => {
      const current = state.history.slice(0, i + 1)
      return {
        history: current,
        current: current[current.length - 1].current,
      }
    })
  }

  render() {
    const winner = calculateWinner(this.getCurrentSquares)
    let status
    if (winner) {
      status = 'Выиграл ' + winner
    } else {
      status = 'Следующий ход: ' + Variants[this.state.current]
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.getCurrentSquares}
            onClick={(event, i) => this.onClickHandler(event, i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            <ToDo
              history={this.state.history}
              onClick={this.onClickHistoryHandler}
            />
          </ol>
        </div>
      </div>
    )
  }
}
