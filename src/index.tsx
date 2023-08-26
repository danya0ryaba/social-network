import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateType, StoreType, store } from './redux/store';
import { store_redux } from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const MyContext = React.createContext(store_redux)

// const rerenderEntireTree = () => {
root.render(
    <BrowserRouter>
        <Provider store={store_redux}>
            <App />
        </Provider>
    </BrowserRouter>
);
// }

// rerenderEntireTree()

// store_redux.subscribe(() => rerenderEntireTree())


