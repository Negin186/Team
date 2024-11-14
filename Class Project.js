import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employee from './comps/Employee';

const root = ReactDOM.createRoot(document.getElementById('root'));
const showEmplooye = true;
root.render(
    <React.StrictMode>

        {showEmplooye ?
            <>
            <input></input>
                <Employee name="n1" family="f1" age="25"/>
                <Employee name="n2" family="f2" age="25"/>
                <Employee name="n3" family="f3" age="25"/>
                <Employee name="n4" family="f4" age="25"/>
                <Employee name="n5" family="f5" age="25"/>

            </>
            : "there is no Employee"}

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
