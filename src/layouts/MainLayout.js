import React from 'react';
import Sidebar from 'src/components/Sidebar/Sidebar';
import * as SC from './MainLayout.styles';

const MainLayout = ({ children }) => {
    return (
        <SC.Warper>
            <Sidebar />
            <main>{children}</main>
        </SC.Warper>
    );
};

export default MainLayout;
