import React, { useState } from 'react';
import * as SC from './Group.styles.js';
import FormCreateChannel from 'src/components/Form/FormCreateChannel';
import Modal from 'src/components/Modal/Modal';
import { Add as AddIcon } from '@material-ui/icons';
import ChannelIcon from 'src/assets/images/channel.svg';
import { useStateValue } from 'src/StateProvider';
import { useHistory } from 'react-router-dom';

const SideBarGroup = ({ title, items }) => {
    const [{ currentRoomId }, dispatch] = useStateValue();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const history = useHistory();
    const selectChannel = (id) => {
        history.push(`/room/${id}`);
    };

    return (
        <div>
            <SC.Toggle>
                <span>
                    <img src={ChannelIcon} />
                    {title}
                </span>
                <button onClick={() => setIsOpenModal(true)}>
                    <span>
                        <AddIcon />
                    </span>
                </button>

                {isOpenModal && (
                    <Modal controlModal={setIsOpenModal}>
                        <FormCreateChannel
                            items={items}
                            controlModal={setIsOpenModal}
                        />
                    </Modal>
                )}
            </SC.Toggle>
            <SC.List>
                {items.map(({ id, name }) => (
                    <li>
                        <a
                            className={currentRoomId === id && 'active'}
                            onClick={() => selectChannel(id)}
                        >
                            <span># {name}</span>
                        </a>
                    </li>
                ))}
            </SC.List>
        </div>
    );
};

export default SideBarGroup;
