import React from 'react';
import { connect } from 'react-redux';

import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional';
import Item from '../Item/Item.jsx';
import './List.sass';

const List = (props) => {
    if (props.state.results === undefined) 
    {
        return (
            <div className="list-wrapper">
                <ul className="list">
                    Загрузка...
                </ul>
            </div>
        )
    }

    const onClickHandler = (e, item) => {
        e.preventDefault();
        props.dispatch(props.callbacks.basketChange(item, BASKET_ADD));
    };

    const mapItems = props.state.results.map( (element, key) => <Item key={key} onClickHandler={onClickHandler} result={element} /> );

    return (
        <div className="list-wrapper">
            <ul className="list">
                { mapItems }
            </ul>
        </div>
    );
}

export default List;