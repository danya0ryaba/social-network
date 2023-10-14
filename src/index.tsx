import ReactDOM from 'react-dom/client';
import './index.css';
import { store_redux } from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


root.render(
    <BrowserRouter>
        <Provider store={store_redux}>
            <App />
        </Provider>
    </BrowserRouter>
);
