import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { store_redux } from './redux/redux-store'
import { App } from './App'

export const Root = () => {
    return <HashRouter >
        <Provider store={store_redux}>
            <App />
        </Provider>
    </HashRouter>
}
// КОГДА ИСПОЛЬЗУЮ HashRouter ЭТО ПРИПИСЫВАТЬ  НЕ НАДО basename={process.env.PUBLIC_URL}
// ЭТО ПРОПИСЫВАЕТСЯ КОГДА ИСПОЛЬЗУЕТСЯ <BrowserRouter/>