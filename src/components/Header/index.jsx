import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import BasketIcon from '../../img/header/Basket';

import './styles.sass';

const mapStateToProps = state => ({ count : state.basket.results.length });

const Header = (props) => {
    const classModifier = props.count < 1 ? 'basket-link__count--hidden' : '';
    return (
        <header className="header">
            <div className="container">
                <div className="header__inside">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Главная</NavLink>
                            </li>
                            <li className="nav-item  nav-item--basket">
                                <NavLink to="/basket/" className="basket-link">
                                    <BasketIcon />
                                    <span className={ 'basket-link__count  ' + classModifier }> { props.count } </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default connect(mapStateToProps)(Header);