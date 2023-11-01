import './header.css'
import { Menu, ConfigProvider } from 'antd';
import React from 'react';
import { Outlet } from "react-router-dom";

const rootStyle={
    borderBottom: '1px solid #1C2024',
    color:'#1C2024'
}

const Header = () => {
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

    return (
        <div>
            <div className='header-menu'>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                activeBarBorderWidth:0,
                                activeBarHeight:0,
                                activeBarWidth:0,
                                horizontalItemHoverColor:'#1C2024',
                                // horizontalItemSelectedColor:'#1C2024',
                                horizontalLineHeight:'4rem',
                            },
                        },
                    }}>
                    <Menu mode="horizontal" 
                        items={items} 
                        style={rootStyle}/>
                </ConfigProvider>    
            </div>
            
            
            <Outlet />
            <div className="h"></div>
        </div>
    );
}

export default Header;
