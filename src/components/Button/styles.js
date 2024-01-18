import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    padding: 0 3.2rem;
    border: none;
    border-radius: .8rem;

    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.6rem;
    font-weight: 400;

    &:disabled{
        filter: brightness(.7);
        cursor: default;
    }

`