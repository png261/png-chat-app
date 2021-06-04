import styled from 'styled-components';

export const Warper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
    overflow: hidden;
    @media (max-width: 768px) {
        display: block;
    }
`;
