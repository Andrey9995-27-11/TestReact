import React from 'react';

const ButtonLazy = (props) => {
    if (!props.lazy) return false;
    const lazyLoad = (e) => {
        e.preventDefault();
        props.lazyEvent({query: props.filter, count: props.count});
    }
    return (
        <div className="btn" onClick={ lazyLoad }>Ещё</div>
    );
}

export default ButtonLazy;