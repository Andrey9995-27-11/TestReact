import { FC } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { basketStore } from 'store'
import ThemeToggler from 'components/ThemeToggler'
import BasketIcon from 'components/BasketIcon'

import './styles.sass'

interface HeaderProps {
  count?: number
}

export const Header: FC<HeaderProps> = observer(() => {
  const { count } = basketStore || 0
  const classModifier = count < 1 ? 'basket-link__count--hidden' : ''
  return (
    <header className="header">
      <div className="container">
        <div className="header__inside">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav-item  nav-item--main">
                <Link to="/" className="nav-link">
                  Главная
                </Link>
              </li>
              <li className="nav-item  nav-item--toggler">
                <ThemeToggler />
              </li>
              <li className="nav-item  nav-item--basket">
                <Link to="/basket" className="basket-link">
                  <BasketIcon />
                  <span className={'basket-link__count  ' + classModifier}>
                    {count}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
})
