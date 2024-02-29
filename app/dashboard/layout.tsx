import React from 'react';
import {Breadcrumb, Layout} from 'antd';
import TopNavbar from "@/components/layout/topNavbar";

const {Header, Content, Footer} = Layout;

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <Layout>
            <TopNavbar/>
            <Content style={{padding: '0 48px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: 'rgb(255, 255, 255)',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: '8px',
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                {/*InnoSpace ©{new Date().getFullYear()} Created by Developer*/}
            </Footer>
        </Layout>
    )
}
