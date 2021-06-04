import React, { useState, useEffect } from 'react';
import * as SC from './Room.styles';
import { useParams } from 'react-router-dom';
import db from 'src/firebase';
import Message from 'src/components/Message/Message';
import InputMessage from 'src/components/InputMessage/InputMessage';
import MainLayout from 'src/layouts/MainLayout';
import { useStateValue } from 'src/StateProvider';
import { deleteOldMessagesWelcome } from 'src/helpers/firebaseControlData';

const Room = () => {
    const { roomId } = useParams();
    const [{ currentRoomId, isOpenSidebar }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'SET_CURRENT_ROOM_ID',
            currentRoomId: roomId,
        });

        dispatch({
            type: 'SET_IS_OPEN_SIDEBAR',
            isOpenSidebar: false,
        });
    }, [roomId]);

    const [roomDetails, setRoomDetails] = useState({});
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (!currentRoomId) return;
        deleteOldMessagesWelcome();

        db.collection('rooms')
            .doc(currentRoomId)
            .onSnapshot((snapshot) =>
                setRoomDetails({ name: snapshot.data()?.name })
            );

        db.collection('rooms')
            .doc(currentRoomId)
            .collection('messages')
            .orderBy('time', 'asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        roomId: currentRoomId,
                        ...doc.data(),
                    }))
                )
            );
    }, [currentRoomId]);

    return (
        <MainLayout>
            <SC.Warper>
                <SC.Messages>
                    {roomMessages.map((message) => (
                        <Message message={message} />
                    ))}
                </SC.Messages>
                <SC.Footer>
                    <InputMessage
                        roomName={roomDetails?.name}
                        roomId={currentRoomId}
                    />
                </SC.Footer>
            </SC.Warper>
        </MainLayout>
    );
};

export default Room;
