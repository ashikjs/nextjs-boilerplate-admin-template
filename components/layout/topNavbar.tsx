'use client'

import React from 'react';

import {Layout, Menu} from 'antd';
import {useRouter} from "next/navigation";
import {logout} from "@/lib/services/auth";
const {Header} = Layout;

const items: any [] = [
  {
    key: 1,
    label: `Dashboard`,
  },
  {
    key: 2,
    label: `User`,
  },
  {
    key: 3,
    label: `User-2`,
  },
  {
    key: 4,
    label: `User-3`,
  },
]

function TopNavbar(props: any) {
  const router = useRouter();
  const userLogout = () => {
    logout().then(data => {
      console.log('Logout successful:', data)
      router.push('/login')
    }).catch(error => console.error('Login failed:', error));
  }
// () => userLogout()
  return (
    <Header style={{display: 'flex', alignItems: 'center'}}>
      <div className="demo-logo"/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{flex: 1, minWidth: 0}}
      />
    </Header>
  );
}

export default TopNavbar;
