import React, { useState } from 'react';

import Selecter from './Selecter';
import './Search.sass';

const Search = (props) => {

    const [term , setTerm] = useState({value:''});
    const onChangeHandler = (e) => setTerm({value: e.target.value});

    let typeValue = '';

    const setSelectValue = (value) => {
        typeValue = value !== '' || value !== 'All' ? '&media='+value : '';
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (term.value === '') return false;
        let query = '&term='+term.value+typeValue+'&limit=20';
        props.callbacks.dispatch(props.callbacks.asyncSearch(query));
    };

    return (
        <form className="search" onSubmit={onSubmitHandler}>
            <div className="search__field">
                <input type="text" name="term" onChange={onChangeHandler} className="input" value={term.value} />
            </div>
            <div className="search__field"><Selecter selectValue={setSelectValue}/></div>
            <div className="search__field">
                <button className="btn">Найти</button>
            </div>
        </form>
    );
}

export default Search;