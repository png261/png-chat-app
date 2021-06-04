import styled from 'styled-components';

export const Warper = styled.div`
    background-color: var(--primary-color);
    font-size: 15px;
    padding: 30px 11px 30px 26px;
    transition: transform 0.3s;
    width: 100%;
    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 99;
        padding-top: 60px;
        &:not(.expand) {
            transform: translateX(-100%);
        }
    }
`;
export const Button = `
    display: none;
    @media (max-width: 768px) {
        display:block;
    }
`;
export const OpenButton = styled.button`
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 98;
    width: 20px;
    height: 20px;
    ${Button}
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    display: block;
    border: 0;
    background: inherit;
    width: 25px;
    height: 25px;
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        left: 0;
        background-color: #020100;
        width: 18px;
        height: 2px;
        border-radius: 12px;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    ${Button}
`;
