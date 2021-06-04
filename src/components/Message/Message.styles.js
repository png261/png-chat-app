import styled from 'styled-components';

export const Warper = styled.div`
    position: relative;
    display: flex;
    border-radius: 12px;
    width: 100%;
    padding: 10px 20px;
    transition: 0.2s;
    column-gap: 15px;
    &:hover {
        background-color: #f8f8f8;
    }
    &:not(:hover) .options {
        display: none;
    }
`;

export const Options = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color: #fff;
    padding: 2px;
    box-shadow: 0 0 0 1px #1d1c1d21, 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    svg {
        height: 18px;
        padding: 0;
    }
`;

export const Button = styled.button`
    display: grid;
    place-items: center;
    border-radius: 8px;
    height: 100%;
    padding: 5px;
    &:hover {
        background-color: #e6f2e9;
    }
`;

export const UserAvatar = styled.div`
    border-radius: 5px;
    width: 36px;
    height: 36px;
    overflow: hidden;
    img {
        width: 100%;
    }
`;

export const UserName = styled.div`
    font-weight: 700;
`;

export const Time = styled.div`
    font-size: 12px;
    color: #838078;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 600px;
    word-break: break-all;
    white-space: pre-line;
`;

export const Reactions = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2px;
    column-gap: 7px;
`;

export const Attachments = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid rgba(2, 1, 0, 0.12);
    border-radius: 12px;
    margin-top: 10px;
    background-color: #fff;
    max-width: 570px;
    padding: 5px;
    gap: 10px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
`;

export const Attachment = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
`;
