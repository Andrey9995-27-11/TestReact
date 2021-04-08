import React from 'react'
import { Square } from './Square'
import { BoardProps } from './props'

/**
 * Used in Game
 @category TestReact
 */
export class Board extends React.Component<BoardProps> {
  public renderSquare(i: number) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={(event) => this.props.onClick(event, i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
