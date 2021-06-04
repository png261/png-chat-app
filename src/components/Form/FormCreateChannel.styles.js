import styled from 'styled-components';

export const Warper = styled.div`
    h2 {
        margin-bottom: 10px;
        font-size: 28px;
        font-weight: 900;
    }
    p {
        margin-bottom: 30px;
        color: #616061;
    }
`;

const flex = `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Form = styled.div`
    ${flex}
    margin-bottom: 10px;
    label {
        display: block;
        margin-bottom: 5px;
        font-size: 15px;
        font-weight: 600;
        color: #000;
        width: 100%;
    }
    small {
        display: block;
        height: 20px;
        color: #ff5a5f;
        width: 100%;
    }
    input {
        display: block;
        border: 1px solid rgba(2, 1, 0, 0.12);
        border-radius: 5px;
        margin-bottom: 5px;
        width: 100%;
        height: 42px;
        padding: 5px 15px;
        font-size: 15px;
        color: #000;
    }
`;

export const Footer = styled.div`
    ${flex}
`;

export const Submit = styled.button`
    border-radius: 4px;
    background-color: #56ab69;
    padding: 10px 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    width: max-content;
`;
