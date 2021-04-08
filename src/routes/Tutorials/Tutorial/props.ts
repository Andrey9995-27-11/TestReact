import { MouseEvent, ReactNode } from 'react'

export type OnClickType = (event?: MouseEvent<ReactNode>, ...args: any) => void

export enum Variants {
  X = 'O',
  O = 'X',
}

export interface SquareProps {
  value: Variants
  onClick: OnClickType
}

export interface HistoryItem {
  squares: Array<Variants>
  current: Variants
}

export interface BoardProps {
  squares: Array<Variants>
  onClick: OnClickType
}

export interface GameState {
  history: Array<HistoryItem>
  current: Variants
}

export interface HistoryProps {
  history: Array<HistoryItem>
  onClick: OnClickType
}
