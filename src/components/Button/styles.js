import styled from 'styled-components'



export const Button = styled.button`

background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'}; 
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

border: ${props => props.isBack ? '1px solid  #FFFFFF' : 'none'};

display: flex;
align-items: center;
justify-content: center;

gap: 30px;

cursor: pointer;

&:hover {
  opacity:0.8;
}

&:active {
  opacity:0.5;
}

img {
  transform: ${props => props.isBack ? 'rotate(180deg)' : 'rotate(0deg)'};
}
`;

