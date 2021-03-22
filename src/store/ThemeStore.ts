import { makeAutoObservable } from 'mobx'

type Values = 'light' | 'night'

interface ToggleValues {
  light: 'night'
  night: 'light'
}

class ThemeStore {
  private _value: Values = 'light'
  public themes: ToggleValues = {
    light: 'night',
    night: 'light',
  }
  get value(): Values {
    return this._value
  }
  set value(value: Values) {
    this._value = value
  }
  public rootStore
  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
  public themeToggle() {
    this.value = this.themes[this.value]
  }
}

export default ThemeStore
