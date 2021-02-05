import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List';
import Search from '../../components/Search';
import ButtonLazy from '../../components/ButtonLazy';
import { basketChange , asyncSearch } from '../../js/functions';
import { LAZY } from '../../js/additional';

import './styles.sass';

const mapStateToProps = (state) => ({
    list : state.list.results , 
    filter : state.list.filter,
    inBasket : state.basket.results.map(element => element.ID),
    lazy : state.list.lazy,
});

const mapDispatchToProps = dispatch => ({ 
    basketChange : (item , type) => dispatch(basketChange(item , type)),
    asyncSearch : (query) => dispatch(asyncSearch(LAZY , query))
});

const Route = (props) => {
    return (
        <>
            <Search />
            <List list={ props.list } inBasket={ props.inBasket } basketChange={ props.basketChange } />
            <ButtonLazy lazyEvent={ props.asyncSearch } count={ props.list.length } filter={ props.filter } lazy={ props.lazy } />
        </>
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);