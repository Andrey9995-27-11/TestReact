import React from 'react'
import { Link } from 'react-router-dom'

import ThemeToggler from '../ThemeToggler'
import BasketIcon from '../BasketIcon'

import './styles.sass'

const Header = (props) => {
  const classModifier = props.count < 1 ? 'basket-link__count--hidden' : ''
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
                <ThemeToggler themeToggler={props.themeToggler} />
              </li>
              <li className="nav-item  nav-item--basket">
                <Link to="/basket" className="basket-link">
                  <BasketIcon />
                  <span className={'basket-link__count  ' + classModifier}>
                    {' '}
                    {props.count}{' '}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
