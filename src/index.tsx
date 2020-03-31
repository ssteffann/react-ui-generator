import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Spinner from "./components/spinner/Spinner";
import { API } from "./constants/api-urls.constants";
import axios from 'axios';

const initApp = async () => {
    try {
        const pages = await axios.get(API.PAGES_DATA);
        const resp = await import('./App');
        const App = resp.default;

        ReactDOM.render(
            <React.StrictMode>
                <App pages={pages.data} />
            </React.StrictMode>,
            document.getElementById('root')
        );
    } catch (e) {
        console.error(e);
    }
};

initApp();

ReactDOM.render(
    <React.StrictMode>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Spinner size={3}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
