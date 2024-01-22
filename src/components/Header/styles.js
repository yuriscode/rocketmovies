import styled from 'styled-components'


export const Container = styled.header`
    height: 11.6rem;
    width: 100%;

    grid-area: header;

    border-bottom: .1rem solid ${({ theme }) => theme.colors.lineColor};
    display: flex;
    gap: 6.4rem;
    align-items: center;

    padding: 0 12.3rem;

    > h1 {
        font-size: 2.4rem;
        font-weight: 700;
        cursor: pointer;

        color: ${({ theme }) => theme.colors.pink};
    }
`   

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        display: flex;
        width: 6.4rem;
        height: 6.4rem;

        cursor: pointer;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: .9rem;

        text-align: end;
        
        strong {
            font-size: 1.4rem;
            cursor: pointer;
        }

        span a{
            font-size: 1.4rem;
            color: ${({ theme }) => theme.colors.details};
            display: inline-block;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: .1rem;
                bottom: 0;
                left: 0;
                background-color: ${({ theme }) => theme.colors.details};
                transform-origin: center;
                transition: transform 0.1s ease-out;
            }

            &:hover::after {
                transform: scaleX(1);
            }

        }


    }
`