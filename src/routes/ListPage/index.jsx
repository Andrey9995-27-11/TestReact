import React from 'react';
import { connect } from 'react-redux';

import List from '../../components/List';
import Search from '../../components/Search';
import ButtonLazy from '../../components/ButtonLazy';
import { basketChange , asyncSearch } from '../../js/functions';
import { LAZY , SEARCH , TOGGLE_IS_SEARCHING } from '../../js/additional';

import './styles.sass';

const mapStateToProps = (state) => ({
    list : state.list.results, 
    filter : state.list.filter,
    inBasket : state.basket.results.map(element => element.ID),
    lazy : state.list.lazy,
    notFound : state.list.notFound,
    isSearching : state.list.isSearching,
});

const mapDispatchToProps = dispatch => ({ 
    basketChange : (item , type) => dispatch(basketChange(item , type)),
    lazyHandler : (query) => dispatch(asyncSearch(LAZY , query)),
    asyncSearch : (query) => dispatch(asyncSearch(SEARCH , query)),
    toggleIsSearching : () => dispatch({ type: TOGGLE_IS_SEARCHING , value: true }),
});

const Route = (props) => {

    return (
        <section className="list-page">
            <Search asyncSearch={ props.asyncSearch } toggleIsSearching={ props.toggleIsSearching }/>
            <List isSearching={ props.isSearching } list={ props.list } inBasket={ props.inBasket } basketChange={ props.basketChange } notFound={ props.notFound }/>
            { (props.lazy && !props.isSearching) &&
                <ButtonLazy lazyEvent={ props.lazyHandler } count={ props.list.length } filter={ props.filter } toggleIsSearching={ props.toggleIsSearching } />
            }
        </section>
    );
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);