import { Container } from './styles'

export function Button({ title, type, ...rest }){
  return(
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}