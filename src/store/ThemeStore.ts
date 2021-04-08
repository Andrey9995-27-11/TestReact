import { makeAutoObservable } from 'mobx'

const themes: { [key: string]: string } = {
  light: 'night',
  night: 'light',
}

export class ThemeStore {
  public value: string = 'light'
  constructor() {
    makeAutoObservable(this)
  }
  public themeToggle: () => void = () => {
    this.value = themes[this.value]
  }
}

export const themeStore = new ThemeStore()
