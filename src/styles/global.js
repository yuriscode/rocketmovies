import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textColor};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-size: 1.6rem;
        outline: none;

        font-family: 'Roboto Slab', serif;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover{
        filter: brightness(.9)
    }

    ::-webkit-scrollbar{
        width: .8rem;
    }

    ::-webkit-scrollbar-track{
        background: none;
        height: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.colors.pink};
        border-radius: .8rem;
        height: 5px;
    }
`