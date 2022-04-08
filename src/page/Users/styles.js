import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Background from '../../assets/background-secundario.svg'



export const Container = styled.div`

     background: url("${Background}"); 
     background-size: cover; 
    
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 44px;

    min-height:100vh;
`;

export const Image = styled.img`

  margin-top: 30px;


`;

export const LayoutCel = styled.div`

    padding: 50px 36px;

    width: 414px;
    height: 645px;
    
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(45px);
    
    min-height:100vh;
`;


export const H1 = styled.h1`

text-align: center;

font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
color: #FFFFFF;
    
margin-bottom: 80px;    
`;


export const Button = styled(Link)`

background: transparent;
border-radius: 14px;
margin-top: 80px;
width: 342px;
height: 74px;
color: white;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
text-decoration: none;

border: 1px solid  #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
margin-top: 120px;


gap: 30px;

cursor: pointer;

&:hover {
  opacity:0.8;
}

&:active {
  opacity:0.5;
}

img {
  transform: scaleX(-1);
}





`;

export const User = styled.li` 

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

display: flex;
justify-content: space-around;
align-items: center;
margin-top:28px;

p{
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
}

button{
  background: none;
  border: none;
  cursor: pointer;
}

`;

