import styled from 'styled-components';

export const Warper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    height: 100vh;
    @media (max-width: 768px) {
        height: calc(100vh - 40px);
        margin-top: 40px;
        border-top: 1px solid rgba(2, 1, 0, 0.12);
    }
`;
export const Messages = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    row-gap: 15px;
    overflow-y: auto;
    overflow-x: hide;
`;

export const Footer = styled.div`
    height: max-content;
    padding: 20px;
`;
