"use client"

import './page.css'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import background from '../../../public/image/login-background.JPG'
import LoginOrRegister from '../components/loginOrRegister'
import { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
import ScrollReveal from 'scrollreveal'
import { VALIDATOR_EMAIL } from '@/shared/util/validators'
 
const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
  display: 'auto',
})

export default function Login(){
    const [isLogin,setIsLogin] = useState(true);

    const handleIsOnChange =(n)=>{
        setIsLogin(n);
    }

    useEffect(()=>{
        ScrollReveal().reveal('.login-container',{
        duration:2000,
        mobile:true,
        distance:'40px',
        });
    })

    

    return(
        <div>
            <Image 
            src={background} 
            alt="Login-background" 
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
                zIndex:-1
            }}/>
            <div className='login-container'>
                <div className='text-container'>
                    <h2 className={`${dancingScript.className} ${'text-h2'}`}>Welcome to</h2>
                    <h1 className={`${dancingScript.className} ${'text-h1'}`}>SummerTeaTree</h1>
                    <p className={`${dancingScript.className} ${'text-p'}`}>A personal blog</p>
                    <LoginOrRegister isOn={isLogin} onIsOnChange={handleIsOnChange}/>
                </div>
                <LoginForm className={`loginForm ${isLogin? 'show-loginForm' : 'hide-loginForm'}`}/>
            </div>
        </div>
    );
}

function LoginForm(){
    return(
        <div style={{padding:' 2rem 20%'}}>
            <Form name="basic" initialValues={{remember: true}} autoComplete="off" labelCol={{ span: 5 }} layout="vertical">
                <ConfigProvider theme={{
                        components: {
                            Button: {
                                defaultBg:'#e6f7c4',
                                linkHoverBg:'#fff'
                            },
                            Input:{
                                hoverBorderColor:'transparent',
                                activeBorderColor:'transparent',
                            }
                        },
                    }}>
                    <Form.Item  name="email" label="Email" rules={[
                        {required: true,message: 'Please input your email!'},
                        {required: true,message: 'Please input right email formate!',validator:[VALIDATOR_EMAIL()]}
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{required: true,message: 'Please input your password!'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{textAlign:'center'}}>
                        <Button type="default" htmlType="submit" block={true} shape={'round'} size={'large'}>
                            Submit
                        </Button>
                    </Form.Item>
                </ConfigProvider>
            </Form>
        </div>
    );
}