import styled, { css } from 'styled-components';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export const Container = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-left: 30px;
    }

    .left,
    .right {
        width: 40px;
        height: 225px;

        background: rgba(0, 0, 0, 0.6);
        opacity: 0;

        position: absolute;
        z-index: 9;

        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        cursor: pointer;
        transition: all ease 0.5s;
    }

    

    &:hover .left,
    &:hover .right {
        opacity: 1;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }
    
    @media (max-width: 760px) {
        .left,
        .right {
            opacity: 1;
        }
    }
`;

const iconCSS = css`
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    fill: #fff;
`;

export const NavigateBefore = styled(MdNavigateBefore)`${iconCSS}`;

export const NavigateNext = styled(MdNavigateNext)`${iconCSS}`;


export const ListArea = styled.div`
    overflow-x: hidden;

    padding-left: 30px;
`;

export const List = styled.div`
    transition: all ease 0.5s;
`;

export const Item = styled.div`
    display: inline-block;
    
    width: 150px;

    cursor: pointer;

    img {
        width: 100%;

        transform: scale(0.9); 
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }

    @media (min-width: 760px) {

    }
`;


