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
        font-family: 'Roboto Slab', serif;;
        background-color: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-size: 1.6rem;
        outline: none;
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


`