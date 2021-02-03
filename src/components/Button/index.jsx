import React from 'react';

import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional';

import './styles.sass';

const Button = (props) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        props.basketChange((props.basketEvent === BASKET_ADD ? props.result : props.result.ID) , props.basketEvent);
    };

    switch (props.basketEvent) {
        case BASKET_REMOVE:
            return <div className="btn" onClick={ onClickHandler }>Удалить из корзины</div>
        case BASKET_ADD:
            return <div className="btn" onClick={ onClickHandler }>Добавить в корзину</div>
        default:
            return <div className="btn  btn--disable">Товар в корзине</div>
    }
}

export default Button;