import React, { useState } from 'react';
import db, { storageService } from 'src/firebase';
import { useStateValue } from 'src/StateProvider';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import { v4 } from 'uuid';
import * as SC from './InputMessage.styles';

const InputMessage = ({ roomName, roomId }) => {
    const [{ user }, dispatch] = useStateValue();
    const [inputText, setInputText] = useState('');
    const [attachments, setAttachments] = useState([]);

    const sendMessage = async (e) => {
        if (!roomId || (inputText === '' && attachments.length === 0)) return;

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                content: inputText,
                time: new Date(),
                user_id: user.id,
                user_name: user.name,
                user_avt: user.avt,
                attachments: attachments,
                reactions: {
                    like: 0,
                    love: 0,
                    haha: 0,
                    wow: 0,
                    sad: 0,
                    angry: 0,
                },
            });

        setInputText('');
        setAttachments([]);
    };

    const onKeyPress = (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        if (e.shiftKey) return setInputText(inputText + '\r\n');

        return sendMessage();
    };

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        const storageRef = storageService
            .ref()
            .child(`${roomName}/${roomId}/${v4()}`);
        const response = await storageRef.put(file);
        const attachment = await response.ref.getDownloadURL();

        setAttachments([...attachments, attachment]);
    };

    const removeAttachments = (attachment) => {
        setAttachments(
            attachments.filter((curAttachment) => curAttachment !== attachment)
        );
    };

    return (
        <SC.Warper>
            <SC.Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={onKeyPress}
                type="text"
                placeholder={`Room: ${roomName || ''}`}
            />

            <SC.Footer>
                <SC.Attachments>
                    {attachments.map((attachment) => (
                        <SC.Attachment>
                            <SC.Attachment__Img>
                                <img src={attachment} />
                            </SC.Attachment__Img>
                            <SC.Attachment__Remove
                                onClick={() => removeAttachments(attachment)}
                            >
                                <CloseIcon />
                            </SC.Attachment__Remove>
                        </SC.Attachment>
                    ))}
                    <SC.Attachment__Add>
                        <input
                            type="file"
                            id="file"
                            accept="image/*"
                            onChange={uploadFile}
                        />
                        <label htmlFor="file">
                            <AttachFileIcon />
                        </label>
                    </SC.Attachment__Add>
                </SC.Attachments>
                <SC.Submit onClick={sendMessage}>
                    <SendIcon />
                </SC.Submit>
            </SC.Footer>
        </SC.Warper>
    );
};

export default InputMessage;
