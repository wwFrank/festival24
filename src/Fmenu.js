import React, { Component } from 'react';
import { ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Button from 'antd/es/button';
import './App.css';
import { from } from 'rxjs';
import { Menu, Icon } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import './Item.js'
import Item from './Item.js'
import { Layout } from 'antd';

import { Carousel } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const { SubMenu } = Menu;

function onChange(a, b, c) {
  console.log(a, b, c);
}



class App extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return (
      <div>
        <Layout style={{ width: '800px',height:'828px', margin: '0 auto' }}>
          <Header style={{backgroundImage: 'url(https://gw.alicdn.com/tfs/TB1jzbIohD1gK0jSZFKXXcJrVXa-800-828.png)', height: '100%', padding: '0' }}>
            <Carousel afterChange={onChange} style={{ width: '640px'}}>
              <div >
                <p>双12爆款清单</p>
              </div>
              <div>
                <img src='https://gw.alicdn.com/tfs/TB1.N10nVP7gK0jSZFjXXc5aXXa-1286-1054.jpg' width='640px' height='476px'></img>
              </div>
              <div>
                <img src='https://gw.alicdn.com/tfs/TB1.N10nVP7gK0jSZFjXXc5aXXa-1286-1054.jpg' width='640px' height='476px'></img>
              </div>
              <div>
                <img src='https://gw.alicdn.com/tfs/TB1.N10nVP7gK0jSZFjXXc5aXXa-1286-1054.jpg' width='640px' height='476px'></img>
              </div>
            </Carousel>
          </Header>
          <Content >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ backgroundImage: 'linear-gradient(180deg, #bb3246,#e44a64)', backgroundColor: '#bb3246' }}>
              <Menu.Item key="mail">
                <a href="eaters.html" target="_blank" rel="吃货的后裔"><Icon type="coffee" />吃货的后裔</a>
              </Menu.Item>
              <Menu.Item key="economic">
                <a href="economic.html" target="_blank" rel="经济适用女"><Icon type="crown" />经济适用女</a>
              </Menu.Item>
              <Menu.Item key="students" >
                <a href="students.html" target="_blank" rel="超级大学生"><Icon type="star" />超级大学生</a>
              </Menu.Item>
              <Menu.Item key="app" >

                <a href="store.html" target="_blank" rel="囤货小当家"><Icon type="shopping-cart" />囤货小当家</a>
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    女神专属
            </span>
                }
              >
                <Menu.ItemGroup title="美妆达人">
                  <Menu.Item key="setting:1">豆蔻少女</Menu.Item>
                  <Menu.Item key="setting:2">简约女神</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="原宿少女">
                  <Menu.Item key="setting:3">品质女神</Menu.Item>
                  <Menu.Item key="setting:4">清新少女</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Content>
          <Content>
            <Item></Item>
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
