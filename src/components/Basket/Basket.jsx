import React from 'react';

import List from '../List/List.jsx';
import './Basket.sass';

const Basket = (props) => {
    return (
        <React.Fragment>
            {List(props)}
        </React.Fragment>
    );
}

export default Basket;