import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
