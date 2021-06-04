import styled from 'styled-components';

export const Warper = styled.div`
    margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
    border: 1px solid rgba(2, 1, 0, 0.12);
    border-radius: 12px;
    width: 100%;
    height: 81px;
    resize: none;
    padding: 15px;
`;

const Button = `
        font-size: 13px;
        height: 28px;
        min-width: 56px;
        padding: 0 12px 1px;
        border-radius: 5px;
        margin-right: 5px;
        margin-top: 5px;
        font-weight: 600;
`;

export const Cancel = styled.button`
    ${Button}
    background: rgba(255, 90, 95, 0.12);
    color: #ff5a5f;
`;

export const Save = styled.button`
    ${Button}
    background: #56ab69;
    color: #fff;
`;
