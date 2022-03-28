import React from 'react';


import logoUser from './assets/logoConsult.svg'

import Arrow from './assets/arrow.svg'

import { Container, Image, LayoutCel, H1, LabelInput, Input, Button, User } from './styles'

function App() {



  return (


    <Container>

      <Image src={logoUser} alt="logo" />

      <LayoutCel>

        <H1>Olá!</H1>

        <LabelInput>Nome</LabelInput>

        <Input placeholder='Rodolfo' />

        <LabelInput>Idade</LabelInput>

        <Input placeholder='Idade' />

        <Button>Cadastrar<img src={Arrow} alt='arrow' /></Button>
        
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>

      </LayoutCel>

    </Container>
  )
}



export default App;
