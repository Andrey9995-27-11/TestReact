import { FC } from 'react'
import { HistoryProps } from './props'

export const ToDo: FC<HistoryProps> = ({ history, onClick }) => {
  return (
    <ul>
      {history.map((element, i) => (
        <li key={i}>
          <button onClick={(event) => onClick(event, i)}>
            State: {element.squares.join()}
          </button>
        </li>
      ))}
    </ul>
  )
}
