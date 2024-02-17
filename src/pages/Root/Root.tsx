import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root: FC = () => {
    return (
        <>
            <div>Root</div>
            <Outlet />
        </>
    );
};

export default Root;
