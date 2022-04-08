import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';

import logoUser from '../../assets/3urs.svg'

import Arrow from '../../assets/arrow.svg'

import Trash from '../../assets/trash.svg'



import { Container, Image, LayoutCel, H1, Button, User } from './styles'

function Users() {


  const [users, setUsers] = useState([])

  const inputName = useRef()


  const inputAge = useRef()





  async function addNewUser() {

    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value,

      

    })

    

    setUsers([...users, newUser])



  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get('http://localhost:3001/users')
      setUsers(newUsers)
    
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

        <H1>Usuários</H1>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
            </User>
          ))}
        </ul>

        <Button  to='/' 
        onClick={addNewUser}><img src={Arrow} alt='arrow'/>Voltar</Button>


      </LayoutCel>

    </Container>
  )
}



export default Users;
