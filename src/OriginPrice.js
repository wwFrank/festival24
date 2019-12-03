import React from 'react';
class OriginPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state.price = props.price;
    }

    state = {
        price: '268.00'
    };
    render() {
        return (
            <div>
                <div style={{float:'left', color:'#333b46'}}>原价:￥</div>
                <div style={{float:'left',color:'#333b46', textDecoration:'line-through'}}>{this.state.price}</div>
            </div>
        );
    }
}

export default OriginPrice;