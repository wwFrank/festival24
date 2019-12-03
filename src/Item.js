import React from 'react';
import { Card, Avatar } from 'antd';
import RecommendStar from './RecommendStar.js'
import OriginPrice from './OriginPrice.js'
import TaoCommand from './TaoCommand.js'
import './Item.css'

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemUrl: props.itemUrl,
            imgUrl: props.imgUrl,
            title: props.title,
            desc: props.desc,
            price: props.price,
            promotionPrice: props.promotionPrice,
            starNum: props.starNum,
            taoCommand: props.taoCommand,
            left: { float: 'left' },
            right: { float: 'right' }
        };
        if ((props.itemIndex % 2) == 0) {
            this.state.left = { float: 'left' };
            this.state.right = { float: 'right' };
        } else {
            this.state.left = { float: 'right' };
            this.state.right = { float: 'left' };
        }
    }

    subTitle = title => {
        if (title.length > 14) {
            return title.substr(0, 12) + "..."
        }
        return title;
    }

    subDesc = desc => {
        if (desc.length > 24) {
            return desc.substr(0, 24) + "..."
        }
        return desc;
    }

    render() {
        return (
            <div>
                <Card className='promItem'>
                    <a href={this.state.itemUrl} target='_blank'>
                        <Avatar style={this.state.left} shape="square" size={214} src={this.state.imgUrl} />
                    </a>
                    <div style={this.state.right} className='itemText' >
                        <RecommendStar style={{ float: 'left' }} starNum={this.state.starNum}></RecommendStar>
                        <div style={{ float: 'left', width: '100%', margin: '6px 0', color: '#d10a12', fontSize: '1.2em' }}>
                            <p style={{ margin: '0' }}>{this.subTitle(this.state.title)}</p>
                        </div>
                        <div style={{ float: 'left', width: '100%', borderRadius: '4px', marginBottom: '8px', padding: '4px', color: '#FFF1D1', backgroundColor: "#e01524", fontSize: '1em' }}>
                            <p style={{ margin: '0', textAlign: 'left' }}>{this.subDesc(this.state.desc)}</p>
                        </div>
                        <div style={{ float: 'left', width: '100%', margin: '6px 0', fontWeight: 'bold', fontSize: '1.2em' }}>
                            <OriginPrice price={this.state.price}></OriginPrice>
                        </div>
                        <div style={{ float: 'left', width: '100%', marginBottom: '6px', color: '#8e0006', fontWeight: 'bold', fontSize: '1.5em' }}>
                            <p style={{ margin: '0', float: 'left' }}>双12价: ￥{this.state.promotionPrice}</p>
                        </div>
                        <div style={{ float: 'left', width: '100%' }}>
                            <TaoCommand taoCommand={this.state.taoCommand}></TaoCommand>
                        </div>
                    </div>

                </Card>
            </div>
        );
    }
}

export default Item;