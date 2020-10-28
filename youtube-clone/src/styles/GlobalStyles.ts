import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', Arial, sans-serif;
    }

    html {
        background: var(--)
    }


    :root {
        --leftside: #212121;
        --header: #212121fa;
        --main: #181818;
        --input-background: #121212;
        --icon: #909090;
        --input-border: #303030;
        --primary: #fff;
        --secondary: #aaa;
        --login-button: #3ea6ff;
        --inactive-icon: #909090;
        --logo: #FF0000;
    }
`;