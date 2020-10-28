import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 19%;
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
    height: 100%;
   
    background: var(--main);
`;

export const Separator = styled.div`
    top: 0;
    bottom: 0;
    left: 100%;
    visibility: visible;
    width: 20px;
    content: '';
`;

export const Wrapper = styled.div`
    max-width: calc(4 * 320px + 16px);
    width: calc(100% - 16px * 2);
    margin-top: 24px;
            
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;