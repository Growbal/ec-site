import React , { Component } from 'react';

import './Header.css';
import Form from './Form';

class Header extends Component{

    render(){
        return (
            <div className = "Header">
                <div className = "Logo">
                    <p>ロゴ</p>
                </div>
                <div className = "Link">
                    <p>リンク</p>
                </div>
                <Form />
                <div className = "Info">
                    <p>お知らせ</p>
                </div>
                <div className = "Account">
                    <p>アカウント情報</p>
                </div>
            </div>
        )
    }

}

export default Header;