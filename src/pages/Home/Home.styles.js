import styled from 'styled-components';

export const Warper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;
    line-height: 1;
    img {
        width: 200px;
        height: auto;
        margin-bottom: 30px;
    }
    h1 {
        font-size: 25px;
        font-weight: 900;
    }
`;
