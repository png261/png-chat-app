import React, { useState } from 'react';
import * as SC from './Message.styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import db from 'src/firebase';
import { useStateValue } from 'src/StateProvider';
import Reaction from './Reaction/Reaction';
import { formatTime } from 'src/helpers/time';
import EnlargeImg from './EnlargeImg/EnlargeImg';
import AddReaction from './AddReaction/AddReaction';
import EditMessage from './EditMessage/EditMessage';
import MoreOptions from './MoreOptions/MoreOptions';
import Modal from 'src/components/Modal/Modal';

const Message = ({ message }) => {
    const [{ user }, dispatch] = useStateValue();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalUrl, setModalUrl] = useState('');
    const [isOpenMoreOptions, setIsOpenMoreOptions] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    let {
        user_id,
        id,
        roomId,
        content,
        time,
        user_name,
        user_avt,
        reactions,
        attachments,
    } = message;

    if (formatTime(time?.seconds)) {
        const { hours, minutes, amPm } = formatTime(time?.seconds);
        time = `${hours} : ${minutes} ${amPm}`;
    } else {
        time = 'VietNam';
    }

    const messageDb = db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .doc(id);

    function editMessage(contentEdit) {
        messageDb.update({
            content: contentEdit,
        });
        setIsEditMode(false);
    }

    const deleteMessage = () => {
        messageDb.delete();
    };

    const addReaction = (name) => {
        messageDb.update({
            reactions: { ...reactions, [name]: reactions[name] + 1 },
        });
    };

    return (
        <SC.Warper onMouseLeave={() => setIsOpenMoreOptions(false)}>
            <SC.Options className="options">
                <SC.Reactions>
                    <AddReaction
                        icon="👍"
                        addReaction={() => addReaction('like')}
                    />
                    <AddReaction
                        icon=" ❤️"
                        addReaction={() => addReaction('love')}
                    />
                    <AddReaction
                        icon="😂"
                        addReaction={() => addReaction('haha')}
                    />
                    <AddReaction
                        icon="😯"
                        addReaction={() => addReaction('wow')}
                    />
                    <AddReaction
                        icon="😢"
                        addReaction={() => addReaction('sad')}
                    />
                    <AddReaction
                        icon="😡"
                        addReaction={() => addReaction('angry')}
                    />
                </SC.Reactions>

                {user_id === user.id && (
                    <>
                        <button
                            onClick={() =>
                                setIsOpenMoreOptions(!isOpenMoreOptions)
                            }
                        >
                            <MoreVertIcon />
                        </button>
                        {isOpenMoreOptions && (
                            <MoreOptions
                                setIsEditMode={setIsEditMode}
                                isEditMode={isEditMode}
                                deleteMessage={deleteMessage}
                            />
                        )}
                    </>
                )}
            </SC.Options>
            <SC.UserAvatar>
                <img src={user_avt} alt={user_name} />
            </SC.UserAvatar>
            <SC.Info>
                <SC.UserName>{user_name}</SC.UserName>
                <SC.Time>{time}</SC.Time>
                <SC.Content>
                    {isEditMode ? (
                        <EditMessage
                            content={content}
                            setIsEditMode={setIsEditMode}
                            editMessage={editMessage}
                        />
                    ) : (
                        content
                    )}
                </SC.Content>
                {attachments.length > 0 && (
                    <SC.Attachments>
                        {attachments.map((attachment) => (
                            <SC.Attachment
                                onClick={() => {
                                    setModalUrl(attachment);
                                    setIsOpenModal(true);
                                }}
                            >
                                <img src={attachment} />
                            </SC.Attachment>
                        ))}
                    </SC.Attachments>
                )}

                <SC.Reactions>
                    <Reaction emoji="👍" value={reactions?.like} />
                    <Reaction emoji="❤️" value={reactions?.love} />
                    <Reaction emoji="😂" value={reactions?.haha} />
                    <Reaction emoji="😯" value={reactions?.wow} />
                    <Reaction emoji="😢" value={reactions?.sad} />
                    <Reaction emoji="😡" value={reactions?.angry} />
                </SC.Reactions>
            </SC.Info>
            {isOpenModal && (
                <Modal controlModal={setIsOpenModal}>
                    <EnlargeImg curUrl={modalUrl} urls={attachments} />
                </Modal>
            )}
        </SC.Warper>
    );
};

export default Message;
