import styled from 'styled-components';

export const Warper = styled.div`
    padding: 0 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
`;

export const Avatar = styled.div`
    width: max-content;
    position: relative;
    margin-bottom: 12px;
    .MuiAvatar-rounded {
        border-radius: 18px;
        width: 48px;
        height: 48px;
    }
`;

export const Status = styled.div`
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    bottom: -2px;
    right: -2px;
    background-color: #56ab69;
    border: 2px solid #fff;
    border-radius: 50%;
`;

export const Name = styled.div`
    font-weight: 700;
    font-size: 16px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const Logout = styled.div`
    border-radius: 12px;
    padding: 6px 10px;
    height: max-content;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    background-color: #bdbdbd;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 15px;
    transition: background 0.2s;
    &:hover {
        background-color: #ff5a5f;
    }
`;
