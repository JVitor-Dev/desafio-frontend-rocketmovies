import { Container } from './styles'

export function ButtonLink({ icon: Icon, title, ...rest}){
  return(
    <Container 
    {...rest}>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}