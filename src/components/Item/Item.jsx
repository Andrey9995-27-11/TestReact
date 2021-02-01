import React, { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { BASKET_ADD, BASKET_REMOVE, TO_REMOVE } from '../../js/additional';
import './Item.sass';

const Item = (props) => {

    const BTN_STATE = props.basketEvent === BASKET_REMOVE ? BASKET_REMOVE : (props.inBasket.indexOf(props.result.ID) > -1 ? false : BASKET_ADD);
    const CHECKED_CLASS = 'btn-remove--checked';

    const onClickHandler = (e, event) => {
        e.preventDefault();
        props.callbacks.dispatch(props.callbacks.basketChange(props.result, event));
    };

    const toggleClass = (e) => {
        e.preventDefault();
        props.callbacks.dispatch({ type: TO_REMOVE , value:  props.result.ID });

        // props.setRemoveItems(props.result.ID, type, props.removeItems);
    }

    const Button = () => {
        switch (BTN_STATE) {
            case BASKET_REMOVE:
                return <div className="btn" onClick={(e) => onClickHandler(e, BASKET_REMOVE)}>Удалить из корзины</div>
            case BASKET_ADD:
                return <div className="btn" onClick={(e) => onClickHandler(e, BASKET_ADD)}>Добавить в корзину</div>
            default:
                return <div className="btn  btn--disable">Товар в корзине</div>
        }
    }

    const RemoveButton = () => {
        let REMOVE_CLASS = ''; 
        if (props.removeItems !== undefined)
            REMOVE_CLASS = props.removeItems.indexOf(props.result.ID) > -1 ? CHECKED_CLASS : '';
        switch (BTN_STATE) {
            case BASKET_REMOVE:
                return <div className={'btn-remove ' + REMOVE_CLASS} onClick={toggleClass}></div>
            default:
                return false
        }
    }

    return (
        <li className={'list-item  list-item--'+props.result.wrapperType} item-type={props.result.wrapperType} item-id={props.result.ID}> 
            <NavLink to={'/detail/'} className="list-item__inner">
                <RemoveButton />
                <div className="list-item__img-wrapper">
                    <img className="list-item__img" alt={props.result.NAME} src={props.result.artworkUrl100} />
                </div>
                <div className="list-item__title">
                    {props.result.NAME} 
                </div>
                <div className="list-item__desc">
                    {props.result.PRICE+'$'} 
                </div>
                <Button />
            </NavLink>
        </li>
    );
}

export default Item;