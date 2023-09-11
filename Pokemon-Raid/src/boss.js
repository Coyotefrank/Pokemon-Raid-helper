
import React from 'react';
import { Layout, Menu, Typography, Button, Row, Col } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <a href="index.html">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="login.html">Sign Up / Login</a>
          </Menu.Item>
        </Menu>
        <Typography.Title className="title" level={2}>
          Pokémon Raid Battle App
        </Typography.Title>
      </Header>
      <Content className="content">
        <Row justify="center">
          <Col span={12}>
            <div className="picture-box">
              <img src="place holder" alt="" />
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12}>
            <div className="content-box">
              <h2>Raid Boss Stats</h2>
              <p>place holder for the boss stats</p>
              <Button type="primary" className="proceed-button">
                Proceed to Search Page
              </Button>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
