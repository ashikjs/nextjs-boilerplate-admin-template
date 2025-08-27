import React from 'react';
import {Layout} from 'antd';

import {Content, Footer} from "antd/es/layout/layout";

import TopNavbar from "@/components/layout/topNavbar";

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Layout>
        <TopNavbar/>
        <Content style={{padding: '15px'}}>
          <div
            style={{
              background: 'rgb(255, 255, 255)',
              minHeight: 'calc(100vh - 125px)',
              padding: 24,
              borderRadius: '8px',
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{textAlign: 'center', padding: '0 10px 10px 10px'}}>
          InnoSpace ©{new Date().getFullYear()} Created by Developer
        </Footer>
      </Layout>
    </>
  )
}
