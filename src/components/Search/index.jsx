import React from 'react';
import { connect } from 'react-redux';

import Selecter from '../Selecter';

import { asyncSearch } from '../../js/functions';
import { SEARCH } from '../../js/additional';
import './styles.sass';

const mapDispatchToProps = dispatch => ({ asyncSearch : (query) => dispatch(asyncSearch(SEARCH, query)) });

const Search = (props) => {

    const [term , setTerm] = React.useState({value: '', type: ''});
    const onChangeHandler = (e) => setTerm({...term, value: e.target.value});

    const setSelectValue = (value) => setTerm({...term, type: '&media=' + value});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (term.value === '') return false;
        let query = '&term='+term.value+term.type;
        console.log(query);
        props.asyncSearch({query : query});
    };

    return (
        <form className="search" onSubmit={ onSubmitHandler }>
            <div className="search__field">
                <input type="text" name="term" onChange={ onChangeHandler } className="input" value={term.value} />
            </div>
            <div className="search__field"><Selecter selectValue={ setSelectValue }/></div>
            <div className="search__field">
                <button className="btn" onClick={ onSubmitHandler }>Найти</button>
            </div>
        </form>
    );
}

export default connect(null, mapDispatchToProps)(Search);