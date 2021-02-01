import React, { useEffect, useState } from 'react';

import { BASKET_ADD, BASKET_REMOVE , TO_REMOVE} from '../../js/additional';
import Item from '../Item/Item.jsx';
import './List.sass';

const List = (props) => {

    const BTN_HIDDEN = 'btn--hidden'
    // const [btnDelete, setbtnDelete] = useState(BTN_HIDDEN);
    // const [removeItemsArray, setRemoveItemsArray] = useState([]);

    if (props.state.results === undefined) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    Введите поисковый запрос...
                </ul>
            </div>
        )
    } else if (!props.state.results.length && props.basketEvent === BASKET_REMOVE) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    Ваша корзина пуста
                </ul>
            </div>
        )
    } else if (!props.state.results.length) {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    По вашему запросу ничего не найдено
                </ul>
            </div>
        )
    }

    const setRemoveItems = (id, type, oldValue) => {
        // let value;
        // if (type && oldValue.indexOf(id) < 0) {
        //     value = oldValue.concat(id);
        // } else if (!type && oldValue.length) {
        //     value = oldValue.filter(element => element !== id);
        // }
        // setRemoveItemsArray(value);
    }

    const onClickHandlerDelete = (e) => {
        e.preventDefault();
        if (!props.state.toremove.length) return false;
        props.callbacks.dispatch(props.callbacks.basketChange(props.state.toremove, BASKET_REMOVE));
    };

    const mapItems = props.state.results.map( (element, key) => <Item key={ key } removeItems={ props.state.toremove } setRemoveItems={ setRemoveItems } basketEvent={ props.basketEvent } inBasket={ props.inBasket } callbacks={ props.callbacks } result={ element } /> );

    const BasketResult = () => {
        switch (props.basketEvent) {
            case BASKET_REMOVE:
                let btnDelete = !props.state.toremove.length ? BTN_HIDDEN : ''; 
                return (
                    <div className="basket-bottom">
                        <div className="basket-bottom__summ">{props.state.summ}$</div>
                        <div className={'btn  '+btnDelete} onClick={ onClickHandlerDelete }>Удалить</div>
                    </div>
                );
            default:
                return false;
        }
    }

    return (
        <div className="list-wrapper">
            <ul className="list">
                { mapItems }
            </ul>
            <BasketResult />
        </div>
    );
}

export default List;