import React from 'react';
import { NavLink } from 'react-router-dom';

import './Item.sass';

const Item = (props) => {
    const onClickHandlerBtn = e => props.onClickHandler(e, props.result);
    return (
        <li className={'list-item  list-item--'+props.result.wrapperType} item-type={props.result.wrapperType} item-id={props.result.ID}> 
            <NavLink to={'/detail/'} className="list-item__inner">
                <div className="list-item__img-wrapper">
                    <img className="list-item__img" alt={props.result.NAME} src={props.result.artworkUrl100} />
                </div>
                <div className="list-item__title">
                    {props.result.NAME} 
                </div>
                <div className="list-item__desc">
                    {props.result.PRICE+'$'} 
                </div>
                <button className="add-to-basket" onClick={onClickHandlerBtn}>Добавить в корзину</button>
            </NavLink>
        </li>
    )
}

export default Item;