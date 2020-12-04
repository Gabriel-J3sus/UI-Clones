import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: #FAFAFA;
    }

    *, input, button {
        border: 0;
        background: none;
        font-family: Helvetica, sans-serif;
        font-size: 17px;
        color: #262626;
    }

    ul {
        list-style: none;
    }
`;