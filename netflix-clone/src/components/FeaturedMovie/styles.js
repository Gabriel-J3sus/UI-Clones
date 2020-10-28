import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    .featured--vertical {
        width: inherit;
        height: inherit;

        background: linear-gradient(to top, #111 10%, transparent 90%);

        .featured--horizontal {
            width: inherit;
            height: inherit; 
                    
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 70px 0 150px 30px;
            
            background: linear-gradient(to right, #111 30%, transparent 70%);
        
            h2 {
                font-size: 60px;
                font-weight: bold;
            }

            p {
                margin-top: 15px;
                font-size: 18px;
                color: #999;
            }
        }
    }

    @media (max-width: 760px) {
        height: 90vh;

        .featured--vertical .featured--horizontal {
            h2 {
            font-size: 40px;
            }
            
            p {
                font-size: 14px;
            }
        }
    }
`;

export const Data = styled.div`
    font-size: 18px;
    font-weight: bold;

    margin-top: 15px;

    span {
        display: inline-block;

        margin-right: 15px;
    }

    span:nth-child(1) {
        color: #46d369;
    }

    @media (max-width: 760px) {
        font-size: 16px;
    }

`;

export const Description = styled.div`
    margin-top: 15px;
    
    font-size: 20px;
    color: #999;

    max-width: 40%;

    @media (max-width: 760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;

export const Buttons = styled.div`
    margin-top: 15px;
    
    a {
        display: inline-block;
        padding: 12px 25px;
        margin-right: 10px;

        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;

        transition: opacity ease 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }

    a:nth-child(1) {
        background: #fff;
        color: #000;
    }

    a:nth-child(2) {
        background: #333;
        color: #fff;
    }

    @media (max-width: 760px) {
        a {
            font-size: 16px;
        }
    }    
`;
