import { Container, Background, Form } from './styles'
import {FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonLink } from '../../components/ButtonLink'

export default function Signin(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div id="inpt">
        <Input type="text" placeholder='Nome' icon={FiUser}/>
        
        <Input type="email" placeholder='E-mail' icon={FiMail}/>
        
        <Input type="password" placeholder='Senha' icon={FiLock}/>
        </div>

        <Button title='Cadastrar'/>

        <ButtonLink title='Voltar para o login' icon={FiArrowLeft}/>
      </Form>

      <Background/>
    </Container>
  )
}