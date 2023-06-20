import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateType, StoreType, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const rerenderEntireTree = (state: StoreType) => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}
rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)


