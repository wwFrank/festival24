import React from 'react';
import { Icon , message} from 'antd';
import copy from 'copy-to-clipboard';

class TaoCommand extends React.Component {
    constructor(props){
        super(props);
        this.state.command = props.taoCommand;
    }
    state = {
        command: '单击复制$hCvvYuZMxD6$打开手机淘宝'
    };

    copyClick = (e) => {
        copy(e.target.innerText);
        message.success('复制成功，请打开手机淘宝立即购买吧', 5);
    }

    render() {
        return (
            <div>
                <div style={{float: 'left',width:'180px', height:'100%',margin: '0', padding:'2px', borderRadius:'8px', color:'black', backgroundColor:'#ffe6d1', fontWeight: 'bold', fontSize: '0.6em' }} onClick={this.copyClick}>
                    {this.state.command}
                </div>
                <div style={{float:'right', color:'#ff5000', marginTop:'-8px', fontSize:'2.8em'}}>
                    <Icon type="taobao-circle" />
                </div>
            </div>
        );
    }
}

export default TaoCommand;