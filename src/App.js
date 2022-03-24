import React from 'react';

import { Container, Image, LayoutCel, H1, LabelInput, Input, Button } from './styles'

function App() {



  return (


    <Container>

      <Image />

      <LayoutCel>

        <H1>Olá!</H1>

        <LabelInput>Nome</LabelInput>

        <Input placeholder='Rodolfo' />

        <labelInput>Idade</labelInput>

        <Input placeholder='Idade'/>

        <Button type='submit' >Cadastrar</Button>



      </LayoutCel>

    </Container>
  )
}



export default App;
