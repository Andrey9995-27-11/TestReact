import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List';
import BasketResult from '../../components/BasketResult';
import { basketChange, removeBasketHandler } from '../../js/functions';

import './styles.sass';

const mapStateToProps = (state) => ({
    list : state.basket.results ,
    toremove : state.basket.toremove,
    summ : state.basket.summ,
});

const mapDispatchToProps = dispatch => ({ 
    basketChange : (item , type) => dispatch(basketChange(item , type)),
    removeBasketHandler : (item) => dispatch(removeBasketHandler(item)),
});

const Route = (props) => {
    React.useEffect(()=>()=> {props.removeBasketHandler(false)},[])
    return (
        <section className="basket-page">
            <List list={ props.list } toRemoveHandler={ props.removeBasketHandler } toRemove={ props.toremove } basketChange={ props.basketChange } />
            <BasketResult summ={ props.summ } toRemove={ props.toremove } basketChange={ props.basketChange } />
        </section>
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);