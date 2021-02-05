import React, {useState} from 'react';

import { MEDIA } from '../../js/additional';
import { objFilter , objMapToArray } from '../../js/functions';
import './styles.sass';

const Selecter = (props) => {

    const [mediaType , setMedia] = useState({ value: 'All', items: objFilter(MEDIA, (key) => (key !== 'All')) });
    const [selecter , setSelecter] = useState('');

    const ACTIVE_CLASS = 'selecter--active';
    const onSelectClick = () => setSelecter(selecter === '' ? ACTIVE_CLASS : '');

    const onOptionClick = (e) => {
        e.stopPropagation();
        let value = e.target.getAttribute('value');
        setMedia({ value: value, items: objFilter(MEDIA, (key) =>  (key !== value)) });
        props.selectValue(MEDIA[value].value);
        onSelectClick();
    }

    const mediaTypes = objMapToArray(mediaType.items, (key, element) => <li className="selecter__item" key={ key } onClick={ onOptionClick } value={ key }>{ element.name }</li> );

    return (
        <div className={'selecter ' + selecter} onClick={ onSelectClick }>
            <input type="text" name="media" onChange={(e)=> e.preventDefault()} value={ MEDIA[mediaType.value].value }/>
            <div className="input">{ MEDIA[mediaType.value].name }</div>
            <ul className="selecter__list">
                { mediaTypes }
            </ul>
        </div>
    )
}

export default Selecter;