import styled from 'styled-components';

export const Modal = styled.div`
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    max-width: 520px;
    width: 100%;
    height: auto;
    padding: 20px;
    color: #000;
`;

export const Overlap = styled.div`
    z-index: 98;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
`;
