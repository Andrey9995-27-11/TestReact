import React from 'react';

import List from '../List/List.jsx';
import Search from '../Search/Search.jsx';

const ListPage = (props) => {
    return (
        <React.Fragment>
            {Search(props)}
            {List(props)}
        </React.Fragment>
    );
}

export default ListPage;