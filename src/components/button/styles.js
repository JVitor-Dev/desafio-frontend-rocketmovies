import styled from 'styled-components'

export const Container = styled.button`
  height: 5.6rem;

  margin-bottom: 4.2rem;

  border: 0;
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.ROSA};

  font-weight: 600;
`
