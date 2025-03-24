//libs
import {createRoot} from 'react-dom/client'
//components
import App from './App';
//context
import { UnatsiProvider } from './context/UnatsiContext';
//styling
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <UnatsiProvider>
        <App />
    </UnatsiProvider>
);
