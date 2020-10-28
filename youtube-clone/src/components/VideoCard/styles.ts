import styled from 'styled-components';

import { FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
    margin-left: calc(16px / 2);
    margin-right: calc(16px / 2);
    margin-bottom: 40px;

    width: calc(100% / 4 - 16px - 0.01px);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const VideoImage = styled.div`
    width: 100%;
    height: 120px;

    background: var(--input-border);
`;

export const VideoData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding-right: 24px;
    
    div {
        display: flex;
        
        span {
            display: flex;
            justify-content: center;
            
            margin: 12px 0 4px;

            font-size: 14px;
            color: var(--primary);
            text-overflow: ellipsis;
            white-space: normal;
        }       
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-left: 48px;

        font-size: 14px;
        color: var(--secondary);
        
        p {
            display: flex;
            
            margin-right: -1.4px;
            padding: 1.4px;
            
            font-size: 14px;
            color: var(--secondary);
            
            transition: color 0.2s;

            &:hover {
                color: var(--primary);
            }
        }

        
    }
`;

export const Avatar = styled.div`
    width: 36px;
    height: 36px;

    margin-top: 12px;
    margin-right: 12px; 

    border-radius: 50%;
    flex-shrink: 0;
    
    background: var(--input-border);
`;

export const CheckIcon = styled(FaCheckCircle)`
    width: 13px;
    height: 13px;

    margin-left: 1px;
    padding-left: 4px;

    fill: var(--secondary);
`;
