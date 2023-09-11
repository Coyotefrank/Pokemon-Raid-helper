
import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Sign Up / Login</Menu.Item>
        </Menu>
        <Typography.Title className="title" level={2}>
          Pokémon
        </Typography.Title>
      </Header>
      <Content className="content">
        <div className="box">
          <h2>Add Pokemon</h2>
          <p>Pokemon search</p>
        </div>
        <div className="box">
          <h2>Your Pokemon</h2>
          <p>Added Pokemon</p>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
