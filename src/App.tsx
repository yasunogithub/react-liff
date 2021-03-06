import React, { FC, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './App.css'
import { buildReplyText } from 'line-message-builder'
import axios from 'axios';
import RecipeReviewCard from "./components/RecipeReviewCard"


const liff = window.liff

const http = axios.create({
    baseURL: `https://mighty-anchorage-01609.herokuapp.com/api/`
})
http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer HkYXti6w52aaG9XcI0ziDxhodbqkw3/hkZ8heSNcGVceJsh6iwldnuAYr7X363ErEMUBVKvzrRHJcFnS/MwjFg==`
    return config
}, function (error) {
    return Promise.reject(error)
})
const App: React.FC = () => {
    const [body, setPlantBody] = useState({plantCategories:[{name:"",imageUrl:""}]});
    const [value, setValue] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)

    useEffect(() => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
            setIsLogin(liff.isLoggedIn())
        })
    }, [])

    const login = () => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
            liff.login()
            setIsLogin(liff.isLoggedIn())
        })
    }

    const openQR = () => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
            try {
                axios({
                    method: 'post',
                    url: 'https://mighty-anchorage-01609.herokuapp.com/remind',
                    data: {},
                    headers:{"Access-Control-Allow-Origin":"*"}

                });

                liff.scanCode()
                    .then(result => setValue(result.value!))
                    .catch(() => alert('cannot read QR'))
            } catch {
                alert('cannot open QR camera')
            }
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await http.get(
                `/plant_categories`,
            );
            setPlantBody(result.data);
        };
        fetchData();
        }, []);
    const getPlant = () =>{
        http.get("/plant_categories") // thenで成功した場合の処理をかける
            .then(response => {
                console.log('status:', response.status); // 200
                console.log('body:', response.data);     // response body.
                // catchでエラー時の挙動を定義する
            }).catch(err => {
            console.log('err:', err);

        });
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
                <Button variant="contained" color="secondary" onClick={() => getPlant()} disabled={!isLogin}>
                    Get Plant
                </Button>
            </div>
            <div className="button">
             <ul>
        {body.plantCategories.map(item => (
        <RecipeReviewCard url="https://saientist.s3-ap-northeast-1.amazonaws.com/radish.jpg" />
        ))}
      </ul>
            </div>
        </div>
    );
}

export default App
