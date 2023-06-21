import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';

const containerEl = document.getElementById('app__container');
const root = ReactDOM.createRoot(containerEl as Element);
root.render(<App />);
