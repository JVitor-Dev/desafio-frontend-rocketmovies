import { Container, Background, Form } from './styles'
import {FiMail, FiLock } from "react-icons/fi"

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonLink } from '../../components/ButtonLink'

export default function Login(){
  return(
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="email" placeholder='E-mail' icon={FiMail}/>
        <br/>
        <Input type="password" placeholder='Senha' icon={FiLock}/>

        <Button title='Entrar'/>

        <ButtonLink title='Criar conta'/>
      </Form>


      <Background/>
    </Container>
  )
}