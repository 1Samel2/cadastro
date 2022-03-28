import React, { useState, useRef } from 'react';



import logoUser from './assets/logoConsult.svg'

import Arrow from './assets/arrow.svg'

import Trash from './assets/trash.svg'

import { Container, Image, LayoutCel, H1, LabelInput, Input, Button, User } from './styles'

function App() {


  const [users, setUsers] = useState([])

  const inputName = useRef()


  const inputAge = useRef()

  function addNewUser() {

    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value},])}




return (


  <Container>

    <Image src={logoUser} alt="logo" />

    <LayoutCel>

      <H1>Olá!</H1>

      <LabelInput>Nome</LabelInput>

      <Input ref={inputName} placeholder='Rodolfo' />

      <LabelInput>Idade</LabelInput>

      <Input ref={inputAge} placeholder='Idade' />

      <Button onClick={addNewUser} >Cadastrar<img src={Arrow} alt='arrow' /></Button>

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p>  <p>{user.age}</p>
            <button><img src={Trash} alt='lata-de-lixo' /></button>
          </User>
        ))}
      </ul>

    </LayoutCel>

  </Container>
)
}



export default App;
