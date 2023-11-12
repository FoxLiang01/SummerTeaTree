"use client"
import { Menu,ConfigProvider } from "antd"
import { Dancing_Script } from 'next/font/google'
import { useContext } from "react"
import { authContext } from "../auth-context"
 
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
  display: 'auto',
})

const items = [
    {
      label: 'Navigation One',
      key: 'mail',
    },
    {
      label: 'Navigation Two',
      key: 'app',
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
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
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

export default function Navigation({children}){
  const auth = useContext(authContext);
  //这里使用auth的isloggedin来判断显示目录或者别的什么，在其他模块也可以这样用哦
  //比如{auth.isloggedin? '':''}什么的

    return(
      <div>
        <section style={{display:"flex",alignItems:"center",paddingTop:"10px"}}>
          <h2 style={{display:"inline",padding:"0 1rem"}} className={dancingScript.className}>
              SummerTeaTree
          </h2>
          <div style={{width:"100%"}}>
            <ConfigProvider theme={{
              components: {
                Menu: {
                  activeBarHeight:0,
                  horizontalItemBorderRadius:10,
                  horizontalItemSelectedBg:'#C2DA91',
                  colorBgContainer:'#FAF9F2',
                  itemActiveBg:'#C2DA91',
                  itemSelectedBg:'#C2DA91',
                  itemSelectedColor:'#7a914c',
                  horizontalLineHeight:"50px",
                },
              },
            }}>
               <Menu mode="horizontal" items={items} className='menu' style={{display:"flex",justifyContent:"center",borderBottom:"none"}}></Menu>
            </ConfigProvider>
          </div>
          <div>
            
          </div>
        </section>
        <div>
          {children}
        </div>
      </div>
    );
}