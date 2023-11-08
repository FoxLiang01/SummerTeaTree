"use client"

import './layout.css'
import { Menu,ConfigProvider } from "antd"
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Dancing_Script } from 'next/font/google'
 
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
  display: 'auto',
})

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}
const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    {
      type: 'divider',
    },
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

export default function DashboardLayout({children}) {

    return (
      <section style={{display:`flex`,height:`100vh`}}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="sidebar-container">
            <h1 className={dancingScript.className} style={{textAlign:'center',margin:'2rem 0'}}>SummerTeaTree</h1>
            
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            colorBgContainer:'#FAF9F2',
                            activeBarBorderWidth:0,
                            itemActiveBg:'#C2DA91',
                            itemSelectedBg:'#C2DA91',
                            itemSelectedColor:'#7a914c',
                        },
                    },
                 }}>
                <Menu mode="inline" items={items} className='menu'></Menu>
            </ConfigProvider>
            
        </div>
        <div style={{width:'100%',backgroundColor:'#FAF9F2'}}>
            <div className='sidebar-header'>
                <div className='sidebar-header-item'>
                    SummerTeaTree-damin
                </div>
                <div>
                    <i className="ri-logout-circle-r-line sidebar-header-item"></i>
                </div>
            </div>

            {children}
        </div>
      </section>
    )
  }