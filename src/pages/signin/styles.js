import styled from 'styled-components'

import bgImage from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10rem;

  @media (min-width: 970px) {
    padding: 0 14.6rem;
  }

  > h1 {
    font-size: 4.8rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 5.1rem;
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXTS};
    font-weight: 500;
    margin-bottom: 4.8rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin-bottom: 1.6rem;
  }
`

export const Background = styled.div`
  flex: 1;
  width: 50%;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
`
