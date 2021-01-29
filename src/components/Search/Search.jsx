import React, {} from 'react';

import { media } from '../../js/additional';
import './Search.sass';

const Search = (props) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let inputValue = e.target.querySelector('[name="term"]').value
        if (inputValue === undefined || inputValue === '') return false;
        let query = '&term='+inputValue+'&limit=20';
        props.dispatch(props.callbacks.asyncSearch(query));
    };

    const mediaTypes = Object.getOwnPropertyNames(media).map((key, indx) => <option key={indx} value={key}>{key}</option> );

    return (
        <form className="search" onSubmit={onSubmitHandler}>
            <input type="text" name="term" className="search__input"/>
            <select name="media">
                <option value="">All</option>
                { mediaTypes }
            </select>
        </form>
    );
}

export default Search;