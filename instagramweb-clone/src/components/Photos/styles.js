import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 935px;

    margin-top: 87px;

    border-top: 1px solid #DBDBDB;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 25px;
    }
`;

export const Buttons = styled.div`
    width: 100%;
    max-width: 198px;

    margin-bottom: 19px;

    display: flex;
    justify-content: space-between;

    > button {
        width: 70px;
        height: 34px;

        display: flex;
        align-items: center;

        padding-top: 18px;
        border-top: 1px solid #262626;

        outline: 0;

        cursor: pointer;

        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;

        &:nth-child(2) {
            border-top: none;
            color: #8F8F8F;
        }

        
    }
`;

export const Img = styled.div`
    width: 295px;
    height: 295px;
    
    cursor: pointer;

    background: #262626;
`;