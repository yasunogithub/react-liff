import React, { FC, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './App.css'
import { buildReplyText } from 'line-message-builder'
import axios from 'axios';


const liff = window.liff
axios.defaults.baseURL = 'https://mighty-anchorage-01609.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const App: React.FC = () => {
    const [value, setValue] = useState<string>('')
        const [isLogin, setIsLogin] = useState<boolean>(false)

        useEffect(() => {
                liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
                        setIsLogin(liff.isLoggedIn())
                        })
                }, [])

    const login = () => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
            axios({
  method: 'post',
  url: 'https://mighty-anchorage-01609.herokuapp.com/remind';,
        data: {}
    });

                liff.login()
                setIsLogin(liff.isLoggedIn())
                })
    }

    const openQR = () => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
                try {
                axios({
method: 'post',
url: 'https://mighty-anchorage-01609.herokuapp.com/remind';,
data: {}
});

                liff.scanCode()
                .then(result => setValue(result.value!))
                .catch(() => alert('cannot read QR'))
                } catch {
                alert('cannot open QR camera')
                }
                })
    }

    return (
            <div className="App">
            <div className="qrValue">{value}</div>
            <div className="loginButton">
            <Button variant="contained" color="primary" onClick={() => login()} disabled={isLogin}>
            Login!!!
            </Button>
            </div>
            <div className="qrButton">
            <Button variant="contained" color="secondary" onClick={() => openQR()} disabled={!isLogin}>
            Open QR camera
            </Button>
            </div>
            </div>
           );
}

export default App
