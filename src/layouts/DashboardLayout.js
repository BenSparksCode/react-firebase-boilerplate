import React from 'react'
import {
    Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    ThunderboltOutlined,
    MailOutlined
} from '@ant-design/icons';

const { Content } = Layout;


export const DashboardLayout = (props) => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
                <Menu.Item key="1" icon={<ThunderboltOutlined />}>
                    <Link to="/page1">Page 1</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ThunderboltOutlined />}>
                    <Link to="/page2">Page 2</Link>
                </Menu.Item>
            </Menu>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
