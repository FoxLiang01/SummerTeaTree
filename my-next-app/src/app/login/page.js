"use client"

import './page.css'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import background from '../../../public/image/login-background.JPG'
import LoginOrRegister from '../../components/loginOrRegister'
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../auth-context'
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
// import ScrollReveal from 'scrollreveal'

const dancingScript = Dancing_Script({
    weight: '700',
    subsets: ['latin'],
    display: 'auto',
})
  
// 验证邮箱格式
const validateEmailFormate = (n,value) =>{
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(value)) {
        return Promise.reject(new Error('Invalid email format!'));
    }
    return Promise.resolve();
}
  
function LoginForm (show){
    const [warningContent,setWarningContent] = useState(null);
    const onFinish = (values) => {
        console.log('Success:', values);
        auth.login();
    };
    const onFinishFailed = (errorInfo) => {
        setWarningContent("电子邮箱或密码输入错误")
    };

    return(
        <div style={{padding:' 2rem 20%'}} className={show.show? 'show-loginForm' : 'hide-loginForm'}>
            <Form name="login" initialValues={{remember: true}} autoComplete="off" labelCol={{ span: 5 }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                        {required: true,message: 'Please input the right email formate!',validator: validateEmailFormate}
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{required: true,message: 'Please input your password!'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <p style={{color:"#ff4d4f",display:warningContent !== null ? "block" : "none"}}>{warningContent}</p>

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

function SignUpForm(show){
    return(
        <div style={{padding:' 2rem 20%'}} className={!show.show? 'show-loginForm' : 'hide-loginForm'}>
            <Form name="signup" initialValues={{remember: true}} autoComplete="off" labelCol={{ span: 12 }} layout="vertical">
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

                    <Form.Item  name="userName" label="Username" rules={[
                        {required: true,message: 'Please input your userName!'}
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item  name="email" label="Email" rules={[
                        {required: true,message: 'Please input the right email formate!',validator: validateEmailFormate}
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{required: true,message: 'Please input your password!'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="confirmPassword" label="Confrim Password" rules={[{required: true,message: 'Please input your password again!'}]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item style={{textAlign:'center'}}>
                        <Button type="default" htmlType="submit" block={true} shape={'round'} size={'large'}>
                            Sign up
                        </Button>
                    </Form.Item>
                </ConfigProvider>
            </Form>
        </div>
    )
}

export default function LoginOrRegistForm(){
    const auth =useContext(authContext)
    const [isLogin,setIsLogin] = useState(true);
    const handleIsOnChange =(n)=>{
        setIsLogin(n);
    }
    // useEffect(() => {
    //     ScrollReveal().reveal('.login-container', {
    //       duration: 2000,
    //       mobile: true,
    //       distance: '40px',
    //     });
    // }, []);
    return(
        <div style={{height:'100%'}}>
            <Image 
            src={background} 
            alt="Login-background" 
            quality={100}
            fill
            sizes="100%"
            style={{
                objectFit: 'cover',
                zIndex:-1
            }}/>
            <div style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className='login-container'>
                    <div className='text-container'>
                        <h2 className={`${dancingScript.className} ${'text-h2'}`}>Welcome to</h2>
                        <h1 className={`${dancingScript.className} ${'text-h1'}`}>SummerTeaTree</h1>
                        <p className={`${dancingScript.className} ${'text-p'}`}>A personal blog</p>
                        <LoginOrRegister onIsOnChange={handleIsOnChange}/>
                    </div>
                    {/* 不要用组件的形式了，拼起来一起吧，方便用auth什么的 */}
                    {/* <LoginForm show={isLogin}/> */}
                    <SignUpForm show={isLogin}/>
                </div>
            </div>
            
        </div>
    )
}