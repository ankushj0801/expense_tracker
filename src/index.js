import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from './context/context';
ReactDOM.render(
    <SpeechProvider appId="600d0f33-9d74-4990-97a9-9fae09d3b7c2" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>
    ,
    document.getElementById('root')
);