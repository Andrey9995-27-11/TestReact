import React from 'react';

import Item from '../Item';
import Preloader from '../Preloader';

import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional';

import './styles.sass';

const List = (props) => {

    const BASKET_EVENT = props.inBasket !== undefined ? BASKET_ADD : BASKET_REMOVE;

    let message = false;
    if (!props.isSearching) {
        if (props.list.length  < 1 && BASKET_EVENT === BASKET_REMOVE) {
            message = 'Ваша корзина пуста';
        } else if (props.list.length < 1 && props.notFound) {
            message = 'По вашему запросу ничего не найдено';
        } else if (props.list.length < 1) {
            message = 'Введите поисковый запрос';
        }
    }
    if (message !== false) {
        return (
            <div className="list-wrapper">
                { message }
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
            { props.isSearching &&
                <Preloader />
            }
        </div>
    );
}

export default List;