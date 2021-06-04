import styled from 'styled-components';

export const Warper = styled.div`
    display: grid;
    background-color: var(--primary-color);
    width: 100vw;
    height: 100vh;
    font-size: 20px;
    font-weight: 500;
    place-items: center;
    text-align: center;
    h1 {
        margin-bottom: 5px;
        font-size: 30px;
        font-weight: 700;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        margin-top: 30px;
        background-color: #56ab69;
        width: 100%;
        padding: 10px 30px;
        font-size: 17px;
        font-weight: 600;
        color: #fff;
        column-gap: 15px;
        img {
            width: 25px;
            height: 25px;
        }
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    text-align: center;
    & > div {
        display: flex;
        justify-content: center;
        column-gap: 15px;
    }
    & > img {
        margin: auto;
        margin-bottom: 30px;
        width: 200px;
        height: auto;
    }
`;
