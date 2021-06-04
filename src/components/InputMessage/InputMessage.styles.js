import styled from 'styled-components';

export const Warper = styled.div`
    border: 1px solid rgba(2, 1, 0, 0.12);
    border-radius: 12px;
    width: 100%;
    resize: none;
    padding: 10px;
`;

export const Textarea = styled.textarea`
    border: 0;
    width: 100%;
    height: 60px;
    padding: 10px;
    resize: none;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Attachments = styled.div`
    display: flex;
    align-items: flex-end;
    column-gap: 20px;
`;

export const Attachment = styled.div`
    position: relative;
`;

export const Attachment__Img = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    width: 30px;
    height: 30px;
    img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Attachment__Remove = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 90, 95, 0.12);
    color: #ff5a5f;
    font-weight: 700;
    cursor: pointer;
    svg {
        width: 17px;
        height: 17px;
        color: rgba(2, 1, 0, 0.64);
    }
`;

export const Attachment__Add = styled.div`
    input {
        display: none;
    }
    label {
        background-color: rgba(2, 1, 0, 0.04);
        display: grid;
        place-items: center;
        width: 35px;
        height: 35px;
        border-radius: 12px;
        cursor: pointer;
    }
`;

export const Submit = styled.button`
    display: grid;
    border-radius: 12px;
    background-color: #56ab69;
    width: 45px;
    height: 35px;
    color: #fff;
    place-items: center;
    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
    }
`;
