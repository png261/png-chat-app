import styled from 'styled-components';

export const CurrentImg = styled.div`
    img {
        width: 100%;
    }
`;

export const AllImg = styled.div`
    display: flex;
    margin-top: 15px;
    overflow-x: scroll;
    column-gap: 10px;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
`;

export const Item = styled.div`
    position: relative;
    display: block;
    border: 2px solid rgba(2, 1, 0, 0.12);
    border-radius: 12px;
    background-color: #fff;
    width: 50px;
    height: 50px;
    overflow: hidden;
    padding: 5px;
    cursor: pointer;
    &.active,
    &:hover {
        border: 2px solid #56ab69;
    }
`;
