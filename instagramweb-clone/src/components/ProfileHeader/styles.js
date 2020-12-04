import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 801px;

    height: 100%;
    max-height: 378px;

    display: flex;
    flex-direction: column;
`;

export const AvatarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 26px;
`;

export const Avatar = styled.div`
    width: 152px;
    height: 152px;

    border-radius: 50%;
    background: #262626;

    margin-right: 100px;

    flex-shrink: 0;
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 530px;
`;

export const ConfigContainer = styled.div`
    max-width: 470px;

    display: flex;
    justify-content: space-between;

    > h1 {
        font-size: 26px;
        font-weight: 500;
        line-height: 32px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > button {
        margin-right: 8px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #4094EF;
        border-radius: 3px;

        font-size: 14px;
        font-weight: bold;
        line-height: 17px;
        color: #FFF;
        
        outline: 0;

        transition: 0.4s;
        
        cursor: pointer;

        &:nth-child(1) {
            width: 98px;
            height: 28px;
        }
    
        &:nth-child(2) {
            width: 33px;
            height: 28px;
        }

        &:nth-child(3) {
            background: none;
            margin-right: 0;

            margin-left: 8px;
            
            > div {
                width: 4px;
                height: 4px;

                background: #262626;
                border-radius: 50%;

                margin-right: 4px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }

        &:hover {
            opacity: 0.8;
        }    
    }
`;

export const Data = styled.div`
    max-width: 340px;
    margin-top: 19px;

    display: flex; 
    justify-content: space-between;

    > span {
        display: flex;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 21px;

    > h2 {
        line-height: 21px;
    }

    > p {
        line-height: 25px;
    }
`;

export const StoriesContainer = styled.div`
    max-width: 865px;
    max-height: 110px;

    margin-top: 56px;

    display: flex;
`;

export const Stories = styled.div`
    max-width: 86px;

    margin-right: 55px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    > div {
        width: 86px;
        height: 86px;
        padding: 4px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 50%;
        border: 1px solid #DBDBDB;
    }

    > p {
        margin-top: 11px;

        font-size: 14px;
        font-weight: bold;
        line-height: 17px;
    }
`;

export const Circle = styled.div`
    width: 78px;
    height: 78px;

    background: #262626;
    border-radius: 50%;
`;