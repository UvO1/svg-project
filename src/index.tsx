import ReactDOM, { Root } from 'react-dom/client';
import App from "./app";

const root: Root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<App/>);