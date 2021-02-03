import React from 'react';

import { BASKET_REMOVE_MULTI } from '../../js/additional';

import './styles.sass';

const BTN_HIDDEN = 'btn--hidden'

const BasketResult = (props) => {
    const onClickHandlerDelete = (e) => {
        e.preventDefault();
        if (!props.toRemove.length) return false;
        props.basketChange(props.toRemove, BASKET_REMOVE_MULTI);
    };
    const BTN_CLASS = props.toRemove.length ? '' : BTN_HIDDEN;
    return (
        <div className="basket-bottom">
            <div className="basket-bottom__summ">{ props.summ }$</div>
            <div className={'btn  ' + BTN_CLASS} onClick={ onClickHandlerDelete }>Удалить</div>
        </div>
    );
}

export default BasketResult;