import { ChangeEvent, FC, ReactNode, useState } from 'react'

const QuotesValues: { [key: string]: number } = {
  usd: 1,
  rub: 75,
  eur: 0.9,
  gbp: 0.8,
}

export const Quotes = () => {
  const [value, setValue] = useState(1)
  const onChange = (value: number) => {
    setValue(value)
  }
  return (
    <ul>
      {Object.keys(QuotesValues).map((key) => (
        <li key={key}>
          <span>{key}</span>
          <InputField value={value} scale={key} onChange={onChange} />
        </li>
      ))}
    </ul>
  )
}

export type onChange = (value: number, event?: ChangeEvent<ReactNode>) => void
export interface InputFieldProps {
  value: number
  scale: string
  onChange: onChange
}
export const InputField: FC<InputFieldProps> = ({ value, scale, onChange }) => {
  const formatValue = value * QuotesValues[scale]
  return (
    <input
      type="text"
      value={formatValue}
      onChange={(e) => {
        const value2 = (parseInt(e.target.value) | 0) / QuotesValues[scale]
        onChange(value2)
      }}
    />
  )
}
