import React, { useState } from 'react';
import * as SC from './FormCreateChannel.styles';
import db from 'src/firebase';
import { useHistory } from 'react-router-dom';

const FormCreateChannel = ({ items, controlModal }) => {
    const [alert, setAlert] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();

    const addChannel = () => {
        if (!name) {
            return setAlert("Can't create channel without name!");
        }
        if (items.some((item) => item.name === name)) {
            return setAlert('This name has taken!');
        }

        db.collection('rooms')
            .add({ name: name, time: new Date() })
            .then(({ id }) => {
                history.push(`/room/${id}`);
            });
        return controlModal(false);
    };

    const onChangeText = (e) => {
        setAlert('');
        setName(e.target.value);
    };

    return (
        <>
            <SC.Warper>
                <h2>Creat a new room</h2>
                <p>Room will be deleted after 7 days</p>
                <SC.Form>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name="channel-name"
                        value={name}
                        onChange={onChangeText}
                    />
                    <small>{alert}</small>
                </SC.Form>
                <SC.Footer>
                    <SC.Submit type="submit" onClick={addChannel}>
                        Create
                    </SC.Submit>
                </SC.Footer>
            </SC.Warper>
        </>
    );
};

export default FormCreateChannel;
