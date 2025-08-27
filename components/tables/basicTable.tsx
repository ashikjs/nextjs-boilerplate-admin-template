'use client'

import React from 'react';
import {Space, Table, Tag} from 'antd';
import {BasicDataTableType} from "@/models/basicDataTableType";

const {Column, ColumnGroup} = Table;

type Props = {
  datas: BasicDataTableType[]
}

const BasicTable: React.FC<Props> = ({datas}: Props) => (
  <Table dataSource={datas}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName"/>
      <Column title="Last Name" dataIndex="lastName" key="lastName"/>
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age"/>
    <Column title="Address" dataIndex="address" key="address"/>
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record: BasicDataTableType) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default BasicTable;
