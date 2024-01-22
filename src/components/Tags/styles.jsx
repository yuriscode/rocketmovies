import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.backgroundTag};
    padding: .8rem 1.6rem;
    border-radius: .8rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textTag};

    margin-right: .8rem;
`