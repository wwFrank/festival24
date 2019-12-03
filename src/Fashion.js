import React from 'react';
import './Fashion.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import './Item.js'
import Item from './Item.js'
import { Layout, Carousel } from 'antd';

const { Header, Footer, Content } = Layout;


function onChange(a, b, c) {
  console.log(a, b, c);
}

class Fashion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subTitle: '来自淘宝内部的爆款清单',
      items: [],
      num: 5,
      isLoaded: false
    };
  }


  componentDidMount() {
    fetch("./itemList.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            subTitle: result.subTitle,
            num: result.items.length,
            items: result.items
          });

        },
        // 注意：需要在此处处理错误 
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          this.setState({
            isLoaded: false
          });
        }
      );
  }

  loadAllItems = () => {
    var itemList = this.state.items;
    var itemNodes = [];
    for (var i = 0; i < itemList.length; i++) {
      itemNodes.push(<Item itemIndex={i} itemUrl={itemList[i].itemUrl} imgUrl={itemList[i].imgUrl} title={itemList[i].title} desc={itemList[i].desc} price={itemList[i].price} promotionPrice={itemList[i].promotionPrice} starNum={itemList[i].starNum} taoCommand={itemList[i].taoCommand} ></Item>);
    }
    return <div>{itemNodes}</div>
  }


  render() {
    return (
      <div>
        <Layout style={{ width: '800px', margin: '0 auto' }}>
          <Header style={{ backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1pcvGooY1gK0jSZFMXXaWcVXa-800-651.png)', width: '800px', height: '651px', padding: '0' }}>
            <Carousel afterChange={onChange} autoplay={true} style={{ width: '100%', fontSize: '5em', fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Microsoft YaHei' }}>
              <div >
                <a style={{ color: '#FFF3D1' }}><p style={{ textAlign: 'center', margin: '120px auto 300px auto' }}>双十二爆款清单<br />倾情奉献</p></a>
              </div>
              <div >
                <a href='food.html' target='_self' style={{ color: '#FFF3D1' }}><p style={{ textAlign: 'center', margin: '120px auto' }}>双十二爆款清单之<br />吃货的后裔</p></a>
              </div>
              <div >
                <a style={{ color: '#FFF3D1' }}><p style={{ textAlign: 'center', margin: '120px auto' }}>双十二爆款清单之<br />经济适用女</p></a>
              </div>
              <div >
                <a style={{ color: '#FFF3D1' }}><p style={{ textAlign: 'center', margin: '120px auto' }}>双十二爆款清单之<br />超级大学生</p></a>
              </div>
              <div >
                <a style={{ color: '#FFF3D1' }}><p style={{ textAlign: 'center', margin: '120px auto' }}>双十二爆款清单之<br />囤货小当家</p></a>
              </div>
            </Carousel>
          </Header>
          <Header style={{ backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1swbLoa61gK0jSZFlXXXDKFXa-800-177.png)', width: '800px', height: '177px', padding: '0' }}>
            <div style={{ width: '100%', fontSize: '1.8em', fontWeight: 'bold', fontFamily: 'Microsoft YaHei', color: '#000000' }}>
              <p style={{ textAlign: 'center', margin: '42px auto' }}>{this.state.subTitle}</p>
            </div>
          </Header>
          <Content style={{ width: '800px', padding: '0', textAlign: 'center', backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1fHPGokL0gK0jSZFAXXcA9pXa-800-4.png)', backgroundRepeat: 'repeat-y' }} >
            {this.loadAllItems()}
          </Content>
          <Footer style={{ backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1eWLBoaL7gK0jSZFBXXXZZpXa-800-243.png)', width: '800px', height: '243px', padding: '0' }}></Footer>
        </Layout>
      </div>
    );
  }
}

export default Fashion;
