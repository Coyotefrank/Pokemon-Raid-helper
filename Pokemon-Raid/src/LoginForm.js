import React from 'react';
import { Button, Form, Input, Layout, Typography, Menu } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const onFinishLogin = (values) => {
   
    console.log('Login Form Values:', values);
  };

  const onFinishSignup = (values) => {
   
    console.log('Signup Form Values:', values);
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Sign Up / Login</Menu.Item>
        </Menu>
        <Typography.Title className="title" level={2}>
          Pokémon Raid Battle App
        </Typography.Title>
      </Header>
      <Content className="content">
        <Typography.Title level={3}>Login</Typography.Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinishLogin}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>

        <Typography.Title level={3}>Sign Up</Typography.Title>
        <Form
          name="signup-form"
          initialValues={{ remember: true }}
          onFinish={onFinishSignup}
        >
          <Form.Item
            name="new-username"
            label="Username"
            rules={[{ required: true, message: 'Please choose a username' }]}
          >
            <Input placeholder="Choose a username" />
          </Form.Item>
          <Form.Item
            name="new-password"
            label="Password"
            rules={[{ required: true, message: 'Please create a password' }]}
          >
            <Input.Password placeholder="Create a password" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form>
      </Content>
    </Layout>
  );
}

export default App;
