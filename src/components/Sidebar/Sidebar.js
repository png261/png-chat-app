import React, { useState, useEffect } from 'react';
import * as SC from './Sidebar.styles';
import db from 'src/firebase';
import SidebarGroup from './Group/Group';
import User from './User/User';
import { useStateValue } from 'src/StateProvider';
import MenuIcon from '@material-ui/icons/Menu';
import { deleteOldRooms } from 'src/helpers/firebaseControlData';

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    const [{ isOpenSidebar }, dispatch] = useStateValue();

    useEffect(() => {
        deleteOldRooms();
        db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data()?.name,
                }))
            );
        });
    }, []);

    const closeSidebar = () => {
        dispatch({
            type: 'SET_IS_OPEN_SIDEBAR',
            isOpenSidebar: false,
        });
    };

    const openSidebar = () => {
        dispatch({
            type: 'SET_IS_OPEN_SIDEBAR',
            isOpenSidebar: true,
        });
    };

    return (
        <>
            <SC.OpenButton onClick={openSidebar}>
                <MenuIcon />
            </SC.OpenButton>
            <SC.Warper className={isOpenSidebar && 'expand'}>
                <SC.CloseButton onClick={closeSidebar} />
                <User />
                <SidebarGroup title="All Rooms" items={rooms} />
            </SC.Warper>
        </>
    );
};

export default Sidebar;
