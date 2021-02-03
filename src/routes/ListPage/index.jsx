import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List';
import Search from '../../components/Search';
import { basketChange } from '../../js/functions';

import './styles.sass';

const mapStateToProps = (state) => ({
    list : state.list.results , 
    inBasket : state.basket.results.map(element => element.ID),
});

const mapDispatchToProps = dispatch => ({ basketChange : (item , type) => dispatch(basketChange(item , type)) });

const Route = (props) => {
    return (
        <>
            <Search />
            <List list={ props.list } inBasket={ props.inBasket } basketChange={ props.basketChange } />
        </>
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);