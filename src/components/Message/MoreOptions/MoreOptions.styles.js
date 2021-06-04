import styled from 'styled-components';

export const Warper = styled.div`
    z-index: 1;
    position: absolute;
    right: 30px;
    top: 0;
    display: flex;
    flex-direction: column;
    border: 5px;
    border-radius: 12px;
    background-color: #fff;
    width: 100px;
    overflow: hidden;
    transform: translateY(-50%);
    box-shadow: 0 0 0 1px #1d1c1d21, 0 4px 12px 0 rgba(0, 0, 0, 0.12);
`;

const Button = `
    display: block;
    border-radius: 0;
    width: 100%;
    height: max-content;
    padding: 10px 15px;
    font-size: 15px;
    text-align: left;
`;

export const Edit = styled.button`
    ${Button}
    &:hover {
        background-color: #56ab69;
        color: #fff;
    }
`;

export const Delete = styled.button`
    ${Button}
    &:hover {
        background: rgba(255, 90, 95, 0.12);
        color: #ff5a5f;
    }
`;
