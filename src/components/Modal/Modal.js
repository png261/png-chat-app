import React from 'react';
import * as SC from './Modal.styles';

const ModalGroup = ({ children, controlModal }) => {
    return (
        <>
            <SC.Modal>{children}</SC.Modal>
            <SC.Overlap onClick={() => controlModal(false)} />
        </>
    );
};

export default ModalGroup;
