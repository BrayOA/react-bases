import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import './styles.css'
import { CunterApp } from './CunterApp'

// FirstApp
// HelloWorldApp


ReactDOM.createRoot (document.getElementById('root')).render(
    <React.StrictMode>
        <CunterApp value = {20}/>
    </React.StrictMode>
)