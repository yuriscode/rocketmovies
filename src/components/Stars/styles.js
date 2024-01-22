import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    > svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.pink};
        fill: ${({ theme, isActive }) => isActive ? `${theme.colors.pink}` : `none`};
        margin-right: 1rem;
    }
`