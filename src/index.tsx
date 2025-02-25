import ReactDOM from 'react-dom/client';

import './index.scss';
import { Layout } from 'components/Layout';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


export const App = () => {
    return (
        <>
            {/*<React.StrictMode>*/}
            <Layout />
            {/*</React.StrictMode>*/}
        </>
    );
};

root.render(App());
