import React from 'react'
import { SquareProps } from './props'

/**
 * Used in Board
 @category TestReact
 */
export class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}
