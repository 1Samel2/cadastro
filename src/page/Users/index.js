import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import logoUser from '../../assets/3urs.svg'

import Arrow from '../../assets/arrow.svg'

import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'

import  LayoutCel  from '../../components/ContainerItens';

import Button from '../../components/Button'

import { Container, Image, User } from './styles'

function Users() {

  const navigate = useNavigate()
  function handleClick() {
    navigate('/home')
    navigate()
  }

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


  function handleClick() {
    navigate('/')
    navigate(1)
  }


  return (


    <Container>

      <Image src={logoUser} alt="logo" />

      <LayoutCel  isBluer={true} >

        <H1>Usuários</H1>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true}
        onClick={handleClick}><img src={Arrow} alt='arrow'/>Voltar</Button>


      </LayoutCel>

    </Container>
  )
}



export default Users;
