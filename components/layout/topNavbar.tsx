'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import {Button, Layout, Menu} from 'antd';

import {useRouter} from "next/navigation";
import {logout} from "@/lib/services/auth";
// @Images
import logo from "@/public/images/logo.png"

const {Header} = Layout;

const items = [
  {
    key: 'dashboard',
    label: (<Link href="/dashboard">Dashboard</Link>),
  },
  {
    key: 'dashboard/user',
    label: (<Link href="/dashboard/user">User</Link>),
  },
];

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
    <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div className="demo-logo">
        <Image src={logo} alt='Company logo' className='w-10' placeholder='blur'/>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{flex: 1, minWidth: 0}}
      />
      <div className="user-logout">
        Md Akram
        <Button onClick={userLogout}>Logout</Button>
      </div>
    </Header>
  );
}

export default TopNavbar;
