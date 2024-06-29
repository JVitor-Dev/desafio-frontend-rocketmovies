import styled from 'styled-components'

import bgImage from '../../assets/background.png'

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: 14.6rem;

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

  :nth-child(6) {
    margin-bottom: 2.4rem;
  }
`

export const Background = styled.div`
  flex: 1;
  width: 50%;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
`
