import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;

    margin-bottom: 2.4rem;
    margin-top: 4rem;

    width: fit-content;
    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.pink};
    font-size: 1.6rem;
    font-weight: 400;

    > .line{
        position: relative;
    
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: .1rem;
            bottom: 0;
            left: 0;
            background-color: ${({ theme }) => theme.colors.pink};
            transform-origin: center;
            transition: transform 0.1s ease-out;
        }
    
        &:hover::after {
            transform: scaleX(1);
        }
    }

    > svg {
        margin-right: .8rem;
    }
`