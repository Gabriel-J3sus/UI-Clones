import styled from 'styled-components';

export const Container = styled.div`
    top: 0;
    right: 0;
    left: 0;
    
    height: 100%;
    max-height: 53px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFF;

    position: fixed;

    padding: 0 20px;
    margin-bottom: 60px;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 930px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > input {
        width: 215px;
        height: 29px;

        padding: 6px 14px;

        background: #FAFAFA;
        border: 1px solid #DBDBDB;
        border-radius: 3px;

        outline: none;

        ::placeholder {
            text-align: center;
            font-size: 14px;
            line-height: 16.7px;
            font-weight: 400;
            color: #8F8F8F;
        }
    }

    .icons-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
            display: flex;
            justify-content: center;
            margin-right: 22px;

            cursor: pointer;

            > div {
                top: 0;
                right: 0;
                position: absolute;

                display: flex;
                justify-content: center;
                align-items: center;
                
                width: 17px;
                height: 17px;

                background: #DC565B;
                border-radius: 50%;

                > p {
                    font-size: 12px;
                    line-height: 14px;
                    color: #FFFFFF;
                }
            }
        }
        
        
    }
`;

export const Circle = styled.div`
    width: 22px;
    height: 22px;
    
    background: #262626;

    border-radius: 50%;
`;