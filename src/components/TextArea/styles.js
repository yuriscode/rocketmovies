import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;
    padding: 1.6rem;

    background-color: ${({ theme }) => theme.colors.inputColor};
    color: ${({ theme }) => theme.colors.white};

    border: none;
    border-radius: 1rem;

    resize: none;
`