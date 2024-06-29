import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BLACK_300};

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 2rem 1.2rem;

    font-size: 1.6rem;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.TEXTS};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
