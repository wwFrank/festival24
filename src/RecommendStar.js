import React from 'react';
import { Icon } from 'antd';

class RecommendStar extends React.Component {

    constructor(props) {
        super(props);
        this.state.num = props.starNum;
    }
    state = {
        num: 6
    };

    loadAllStars = num => {
        var stars = [];
        for(var i=0; i<num; i++) {
            stars.push(<Icon type="star" style={{ color: '#ffdfb6',verticalAlign:'middle' }} />);
        }
        return <div>{stars}</div>
    }

    render() {
        return (
            <div style={{backgroundColor:"#e01524", height:'28px', borderRadius:'4px', padding:'2px 8px'}}>
                <div style={{ float: 'left' , fontSize:'16px', color:'#fff1d1'}}>推荐指数：</div>
                <div style={{ float: 'left'}}>
                    {this.loadAllStars(this.state.num)}</div>
            </div>
        );
    }
}

export default RecommendStar;