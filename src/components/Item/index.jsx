import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import RemoveButton from '../RemoveButton'

import { BASKET_REMOVE } from '../../js/additional';

import './styles.sass';

const Item = (props) => {

    const removeBtnVisible = props.basketEvent === BASKET_REMOVE ? (props.basketEvent) : false;

    return (
        <li className={'list-item  list-item--' + props.result.wrapperType } item-id={props.result.ID}> 
            <Link to={'/detail/'} className="list-item__inner">
                <RemoveButton toRemoveHandler={ props.toRemoveHandler } visible={ removeBtnVisible } toRemove={ props.toRemove } id={ props.result.ID } />
                <div className="list-item__img-wrapper">
                    <img className="list-item__img" alt={ props.result.NAME } src={ props.result.artworkUrl100 } />
                </div>
                <div className="list-item__title">
                    { props.result.NAME } 
                </div>
                <div className="list-item__desc">
                    { props.result.PRICE+'$' }
                </div>
                <Button basketChange={ props.basketChange } basketEvent={ props.basketEvent } result={ props.result } />
            </Link>
        </li>
    );
}

export default Item;