'use client'

import React from 'react';

import {Breadcrumb, Layout, Menu, theme} from 'antd';

const {Header, Content, Footer} = Layout;
import {useRouter} from "next/navigation";
import {logout} from "@/lib/services/auth";

const items: any [] = [
    {
        key: 1,
        label: `Dashboard`,
    },
    {
        key: 1,
        label: `User`,
    },
    {
        key: 1,
        label: `User-2`,
    },
    {
        key: 1,
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