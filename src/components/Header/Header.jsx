import React, {} from 'react';
import { NavLink } from 'react-router-dom';

import './Header.sass';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inside">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink exact to="/" className="link-to-main">В список</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/basket" className="basket-icon" >Корзина {props.count}</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;