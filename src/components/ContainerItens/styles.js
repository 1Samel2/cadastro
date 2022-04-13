import styled from 'styled-components'

export const LayoutCel = styled.div`

    padding: 50px 36px;

    width: 414px;
    height: 645px;
    
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    
    min-height:100vh;
    height: 100%;

    ${props => props.isBluer && `backdrop-filter: blur(45px);` }
`;




