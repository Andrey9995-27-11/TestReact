import React from 'react';
import { connect } from 'react-redux';

import Detail from '../../components/Detail';
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

    componentDidMount() {
        this.props.detailRequest('id='+this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.detailRequest(false);
    }

    render() {
        return ( 
            <section className="detail-page">
                <Detail result={ this.props.result } inBasket={ this.props.inBasket } detailRequest={ this.props.detailRequest } basketChange={ this.props.basketChange } />
            </section> 
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Route);