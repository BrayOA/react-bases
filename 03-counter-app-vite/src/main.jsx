import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import './styles.css'

FirstApp
// HelloWorldApp


ReactDOM.createRoot (document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="soy Goku" subTitle ={234}/>
    </React.StrictMode>
)