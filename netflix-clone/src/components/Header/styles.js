import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
    top: 0;
    right: 0;
    left: 0;

    padding: 0 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    z-index: 10;

    background: transparent;
    transition: all ease 0.5s;
    
    img {
        height: 100%;
    }
    
    &.black {
        background: #141414;
    }
`;

export const Logo = styled.div`
    height: 25px;
`;

export const UserArea = styled.div`
    height: 35px;
`;