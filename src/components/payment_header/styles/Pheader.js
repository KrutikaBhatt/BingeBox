import styled from 'styled-components/macro';
import {Link as ReactLink} from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame =styled.div``;

export const Container =styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
    
    margin-right:40px;
    height : 
    @media(min-width:1450px){
       
    }
`;


export const ButtonLink = styled(ReactLink)`
    display : block;
    background-color: #1A74E2;
    width :110px;
    height :55px;
    color:white;
    border :0;
    font-size :20px;
    border-radius :3px;
    padding : 18px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #6BD0FF;
        color:black;
      }
`;

