import React, { useState, useRef} from 'react';

import axios from 'axios';

import logoUser from '../assets/logoConsult.svg'

 import Arrow from '../assets/arrow.svg'



import { Container, Image, LayoutCel, H1, LabelInput, Input, Button,  } from './styles'

function App() {


  const [users, setUsers] = useState([])

  const inputName = useRef()


  const inputAge = useRef()





  async function addNewUser() {

    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value,

    })

    console.log(newUser)


    setUsers([...users, newUser])



  }




  return (


    <Container>

      <Image src={logoUser} alt="logo" />

      <LayoutCel>

        <H1>Olá!</H1>

        <LabelInput>Nome</LabelInput>

        <Input ref={inputName} placeholder='Rodolfo' />

        <LabelInput>Idade</LabelInput>

        <Input type="number" ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser} >Cadastrar<img src={Arrow} alt='arrow' /></Button>

      </LayoutCel>

    </Container>
  )
}



export default App;
