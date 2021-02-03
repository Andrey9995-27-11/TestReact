import React from 'react';
import { connect } from 'react-redux';

import { asyncSearch } from '../../js/functions';
import Selecter from '../Selecter';
import './styles.sass';

const mapDispatchToProps = dispatch => ({ asyncSearch : (query) => dispatch(asyncSearch(query)) });

const Search = (props) => {

    const [term , setTerm] = React.useState({value: ''});
    const onChangeHandler = (e) => setTerm({value: e.target.value});

    let typeValue = '';

    const setSelectValue = (value) => {
        typeValue = value !== '' || value !== 'All' ? '&media='+value : '';
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (term.value === '') return false;
        let query = '&term='+term.value+typeValue+'&limit=20';
        props.asyncSearch(query);
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