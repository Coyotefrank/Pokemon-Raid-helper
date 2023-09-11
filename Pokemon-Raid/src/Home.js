// APP.JS


import React from 'react';
import { Button, Layout, Menu, Typography } from 'antd';

import './App.css';

const { Header, Content } = Layout;

function App() {
  const handleProceed = () => {

    window.location.href = './LoginForm.js';
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={handleProceed}>
            Sign Up / Login
          </Menu.Item>
        </Menu>
        <Typography.Title className="title" level={2}>
          Pokémon Raid Battle App
        </Typography.Title>
      </Header>
      <Content className="content">
        <Typography.Title level={3}>About Us</Typography.Title>
        <Typography.Paragraph>Welcome to Our Pokémon Raid Battle App!</Typography.Paragraph>
        <Typography.Paragraph>
          We are a team of enthusiastic Pokémon enjoyers and developers who are dedicated to enhancing your Pokémon Raid Battle experience.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Our mission is to equip Trainers like you with the knowledge and tools needed to conquer any Raid Boss. Whether you're challenging a Legendary Pokémon, a Mega Evolution, or any other formidable opponent, our app has you covered.
        </Typography.Paragraph>
        <Typography.Paragraph>
          With our app, you can explore Pokémon stats, discover the best Pokémon for specific Raid Bosses, and fine-tune your battle strategies.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Join us on this journey to become the ultimate Pokémon Trainer. Download our app today and embark on a new adventure!
        </Typography.Paragraph>
        <Typography.Paragraph>Thank you for choosing My Pokémon Raid Battle App!</Typography.Paragraph>
        <Button type="primary" className="proceed-button">
          Proceed to Search Page
        </Button>
      </Content>
    </Layout>
  );
}

export default App;













// LOGINFORM.js
import React from 'react';
import { Button, Form, Input, Layout, Typography, Menu } from 'antd';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const onFinishLogin = (values) => {
    // Handle login form submission here
    console.log('Login Form Values:', values);
  };

  const onFinishSignup = (values) => {
    // Handle signup form submission here
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












// ENTER.JS
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


















// BOSS.JS
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
