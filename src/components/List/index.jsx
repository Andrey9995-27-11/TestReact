import React from 'react';

import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional';
import Item from '../Item';
import './styles.sass';

const List = (props) => {

    const BASKET_EVENT = props.inBasket !== undefined ? BASKET_ADD : BASKET_REMOVE;

    if (props.list === undefined) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    Введите поисковый запрос...
                </ul>
            </div>
        )
    } else if (!props.list.length && BASKET_EVENT === BASKET_REMOVE) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    Ваша корзина пуста
                </ul>
            </div>
        )
    } else if (!props.list.length) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    По вашему запросу ничего не найдено
                </ul>
            </div>
        )
    }

    const getBtnEvent = (id) => ( BASKET_EVENT === BASKET_ADD ? ( props.inBasket.indexOf(id) < 0 ? BASKET_EVENT : false ) : BASKET_EVENT );

    const mapItems = props.list.map( element => <Item key={ element.ID } toRemoveHandler={ props.toRemoveHandler } basketChange={ props.basketChange } toRemove={ props.toRemove } basketEvent={ getBtnEvent(element.ID) } result={ element } /> );

    return (
        <div className="list-wrapper">
            <ul className="list">
                { mapItems }
            </ul>
        </div>
    );
}

export default List;