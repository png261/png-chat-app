import styled from 'styled-components';

export const Toggle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    background: #e6e3d8;
    height: 40px;
    padding: 10px;
    span {
        display: flex;
        align-items: center;
        cursor: pointer;
        column-gap: 10px;
        flex: 1;
        svg {
            color: #56ab69;
        }
    }
`;
export const List = styled.ul`
    padding-left: 20px;
    a {
        display: block;
        border-radius: 12px;
        margin-top: 10px;
        width: 100%;
        padding: 10px 30px;
        cursor: pointer;
        span {
            display: -webkit-box;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        &.active {
            background-color: #e6e3d8;
        }
    }
`;
