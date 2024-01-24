import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
        "header"
        "content";
`

export const Content = styled.div`
    grid-area: content;
    
    padding: 0 12.3rem;
    overflow-Y: auto;

    > h1 {
        font-size: 3.6rem;
        font-weight: 500;
        margin-bottom: 4rem;
    }

    > .input-wrapper {
        display: flex;
        gap: 4rem;
        margin-bottom: 4rem;
    }
`