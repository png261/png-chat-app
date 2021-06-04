import styled from 'styled-components';

export const Warper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: 11px;
    background-color: #e6f2e9;
    padding: 5px 5px;
    border-radius: 12px;
    color: #1378a3;
    font-weight: 700;
    cursor: pointer;
    & > span[role='img'] {
        display: block;
        font-size: 13px;
        background: none;
    }
`;
