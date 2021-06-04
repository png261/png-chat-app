import React from 'react';
import * as SC from './MainLayout.styles';
import Sidebar from 'src/components/Sidebar/Sidebar';

const MainLayout = ({ children }) => {
    return (
        <SC.Warper>
            <Sidebar />
            <main>{children}</main>
        </SC.Warper>
    );
};

export default MainLayout;
