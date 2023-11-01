import './sideBar.css'
import React from 'react';
import { Outlet } from "react-router-dom";
import { Menu } from 'antd';

function sideBar() {
  const items = [
    {
      label: '原创',
      key: 'orgin',
    },
    {
      label: '同人',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    }
  ];

  const sidebarStyle ={
    display:'flex'
  }

  return (
    <div style={sidebarStyle}>
      <div className='sidbar-conatiner'>
        <div className='sidebar-icon'>
          SummerTeaTree
        </div>
        <Menu mode="inline" items={items}/>
      </div>
      <div>
        <div>
          user|logout
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default sideBar;
