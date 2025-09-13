import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import {Provider} from 'react-redux';

import {Posts} from './pages/posts/index.jsx';
import {Root} from './components/Root/index.jsx';
import {DetailPost} from './pages/posts/detail/index.jsx';
import {EditPost} from './pages/posts/edit/index.jsx';
import {AddPost} from './pages/posts/add/index.jsx';
import {Auth} from './pages/auth/index.jsx';
import {Registration} from './pages/register/index.jsx';
import {store} from './redux/store';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: 'posts',
                element: <Posts/>
            },
            {
                path: 'posts/:id',
                element: <DetailPost/>
            },
            {
                path: 'posts/:id/edit',
                element: <EditPost/>
            },
            {
                path: 'posts/add',
                element: <AddPost/>
            },
            {
                path: 'auth',
                element: <Auth/>
            },
            {
                path: 'registration',
                element: <Registration/>
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>
);
