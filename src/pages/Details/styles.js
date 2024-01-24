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
    display: flex;
    flex-direction: column;
    grid-area: content;
    
    padding: 0 12.3rem;
    overflow-Y: auto;

    > .title {
        display: flex;
        align-items: center;
        margin-bottom: 2.4rem;

        h1{
            font-weight: 500;
            font-size: 3.6rem;
            margin-right: 2rem;
        }
    }

    > .tags {
        display: flex;
        margin-bottom: 4rem;
    }

    > .info{
        display: flex;
        gap: 1.6rem;
        margin-bottom: 4rem;
    }

    > span {
        text-align: justify;
        font-size: 1.6rem;
        font-weight: 400;

        margin-bottom: 4rem;

    }
`

export const CreatedBy = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: .1rem solid ${({ theme }) => theme.colors.lineColor};
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
    }
`
export const CreatedAt = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > svg {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.pink};
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
    }
`

