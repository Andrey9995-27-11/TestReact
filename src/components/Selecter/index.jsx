import React, {useState} from 'react';

import { media } from '../../js/additional';
import { objFilter , objMapToArray } from '../../js/functions';
import './styles.sass';

const Selecter = (props) => {

    const [mediaType , setMedia] = useState({ value: 'All', items: objFilter(media, (element) => element !== 'All' ) });
    const [selecter , setSelecter] = useState('');

    const ACTIVE_CLASS = 'selecter--active';
    const onSelectClick = () => setSelecter(selecter === '' ? ACTIVE_CLASS : '');

    const onOptionClick = (e) => {
        e.stopPropagation();
        let value = e.target.getAttribute('value');
        setMedia({ value: value, items: objFilter(media, (element) =>  element !== value ) });
        props.selectValue(value);
        setSelecter('');
    }

    // console.log(media);
    const mediaTypes = objMapToArray(mediaType.items, (indx, element) => <li className="selecter__item" key={indx} onClick={onOptionClick} value={element.value === '' ? 'All' : element.value}>{element.name}</li> );

    return (
        <div className={'selecter ' + selecter} onClick={onSelectClick}>
            <input type="text" name="media" onChange={(e)=> e.preventDefault()} value={media[mediaType.value].value}/>
            <div className="input">{media[mediaType.value].name}</div>
            <ul className="selecter__list">
                { mediaTypes }
            </ul>
        </div>
    )
}

export default Selecter;