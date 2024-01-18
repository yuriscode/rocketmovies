import styled from 'styled-components';

export const Container = styled.input`
    display: flex;
    flex: 1;
    width: 100%;
    height: 5.6rem;
    border-radius: 1rem;
    border: none;
    padding: 1.9rem 2.4rem;

    background-color: ${({ theme }) => theme.colors.inputColor};
    color: ${({ theme }) => theme.colors.details};

    &::placeholder{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.details};
    }


`