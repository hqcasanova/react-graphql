import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const containerEl = document.getElementById('app');
const root = ReactDOM.createRoot(containerEl as Element);
root.render(<App />);
