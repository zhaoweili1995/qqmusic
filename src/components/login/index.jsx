import React from "react"
import "./index.css"



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="login-bg">

                <div className="login-contain">
                    <div className="login-header">
                        <p>欢迎登录</p>
                    </div>
                    <div className="form-group">
                        <div className="form-item">
                            <label htmlFor="username">
                                <img src="images/user.png" />
                            </label>
                            <input id="username" type="text" placeholder="请输入账号" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">
                                <img src="images/password.png" alt="" />
                            </label>
                            <input id="password" type="password" placeholder="请输入密码" />
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="login-btn" id="doLogin">登录</button>
                    </div>

                    <div className="order-login">
                        <p className="order-login-line">其他登录方式</p>
                        <div className="order-login-box">
                            <div>
                                <a href="#">
                                    <img src="images/wechat-login.png" alt=""  />
                                    <p>微信登录</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}