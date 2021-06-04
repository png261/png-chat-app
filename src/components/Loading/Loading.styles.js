import styled, { keyframes } from 'styled-components';

export const Warper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: var(--primary-color);
`;

const rotateDots = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const rotateDot = keyframes`
    80%,
    100% {
        transform: rotate(360deg);
    }
`;

const scaleDot = keyframes`
    50% {
        transform: scale(0.4);
    }
    100%,
    0% {
        transform: scale(1);
    }
`;

export const Dots = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    animation: ${rotateDots} 2.5s infinite linear both;
`;

function template(i, duration) {
    const delay = duration + i / 10;
    return `
         &:nth-child(${i}) {
            animation-delay: ${delay}s;
            &:before {
                animation-delay: ${delay}s;
            }
        }
      `;
}

function getAnimations(items, duration) {
    let str = '';
    for (let i = 1; i <= items; i++) {
        str += template(i, duration);
    }
    return str;
}

export const Dot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${rotateDot} 2s infinite ease-in-out both;
    &:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #56ab69;
        border-radius: 50%;
        animation: ${scaleDot} 2s infinite ease-in-out both;
    }
    ${getAnimations(6, -1.1)}
`;
