import React, { useState } from 'react';
import * as SC from './EditMessage.styles.js';

const EditMessage = ({ content, setIsEditMode, editMessage }) => {
    const [contentEdit, setContentEdit] = useState(content);

    return (
        <SC.Warper>
            <SC.Textarea
                value={contentEdit}
                onChange={(e) => setContentEdit(e.target.value)}
            ></SC.Textarea>
            <SC.Cancel
                onClick={() => {
                    setIsEditMode(false);
                    setContentEdit(content);
                }}
            >
                cancel
            </SC.Cancel>
            <SC.Save onClick={() => editMessage(contentEdit)}>
                Save changes
            </SC.Save>
        </SC.Warper>
    );
};

export default EditMessage;
