import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import { BASKET_ADD } from '../../js/additional';
import { detailRequest , basketChange } from '../../js/functions';

import './styles.sass';

const mapStateToProps = (state) => ({
    result : state.detail.result ,
    inBasket : state.basket.results.map(element => element.ID),
});

const mapDispatchToProps = dispatch => ({ 
    detailRequest : (query) => dispatch(detailRequest(query)),
    basketChange : (item , type) => dispatch(basketChange(item , type)),
});

class Route extends React.Component {

    constructor(props) {
        super(props)
    }

    getBtnEvent(id) { return this.props.inBasket.indexOf(id) < 0 ? BASKET_ADD : false };

    componentDidMount() {
        this.props.detailRequest('id='+this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.detailRequest(false);
    }

    render() {
        if (!this.props.result.ID) return false;
        return (
            <li className={'list-item  list-item--' + this.props.result.wrapperType } item-id={ this.props.result.ID }> 
                <div className="list-item__inner">
                    <div className="list-item__img-wrapper">
                        <img className="list-item__img" alt={ this.props.result.NAME } src={ this.props.result.artworkUrl100 } />
                    </div>
                    <div className="list-item__title">
                        { this.props.result.NAME } 
                    </div>
                    <div className="list-item__desc">
                        { this.props.result.PRICE+'$' }
                    </div>
                    <Button basketChange={ this.props.basketChange } basketEvent={ this.getBtnEvent(this.props.result.ID) } result={ this.props.result } />
                </div>
            </li>
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);