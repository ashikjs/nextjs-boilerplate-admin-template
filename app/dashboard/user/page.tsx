import React from "react";

import BasicTable from "@/components/tables/basicTable";
import {BasicDataTableType} from "@/models/basicDataTableType";
import Title from "antd/es/typography/Title";
import AddUserFormModal from "@/components/forms/addUserFormModal";


export default function Page() {

  const datas: BasicDataTableType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className='p-4'>

      <div className="flex justify-between items-center">
        <Title level={2} className='mb-0'>User List</Title>
        <AddUserFormModal/>
      </div>

      <BasicTable datas={datas}/>

    </div>
  )
}
