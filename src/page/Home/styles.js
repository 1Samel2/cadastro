import styled from 'styled-components'

import Background from '../../assets/background-principal.svg'



export const Container = styled.div`

     background: url("${Background}"); 
     background-size: cover; 
    
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 44px;

    min-height:100vh;
    height: 100%;
`;

export const Image = styled.img`

  margin-top: 30px;


`;






export const LabelInput = styled.p`

font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;

padding-left: 25px;

`;


export const Input = styled.input`

width: 342px;
height: 58px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

border: none;
outline: none;

padding-left: 25px; 

font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;

margin-bottom: 34px;


`;



