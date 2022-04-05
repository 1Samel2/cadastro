import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';

import logoUser from '../assets/logoConsult.svg'

import Arrow from '../assets/arrow.svg'

import Trash from '../assets/trash.svg'



import { Container, Image, LayoutCel, H1, LabelInput, Input, Button, User } from './users/styles'

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

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
      console.log(newUsers)
    }
    fetchUsers()
  }, [])


  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)

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

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
            </User>
          ))}
        </ul>


      </LayoutCel>

    </Container>
  )
}



export default App;
