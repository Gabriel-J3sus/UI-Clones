import styled from 'styled-components';

import { HiUserCircle } from 'react-icons/hi';

export const Container = styled.button`
    min-width: 141px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    width: auto;
    height: 40px;
    padding: 5px 11px;

    text-transform: uppercase;
        
    border: 1px solid var(--login-button);

    > span {
        margin-left: 8px;
        color: var(--login-button);
        font-size: 14px;
        font-weight: 500;
            
        display: block;
    }
`;

export const UserIcon = styled(HiUserCircle)`
    width: 30px;
    height: 30px;
    fill: var(--login-button);
    flex-shrink: 0;  
`;
