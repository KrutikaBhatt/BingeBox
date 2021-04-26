import styled from 'styled-components/macro';
import { Link as RouterLinkage } from 'react-router-dom';

export const Container = styled.div`

  background:black;
  color:#fff;
  

`;
export const Title = styled.h1`
  
  color: #fff;
  text-align:center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  padding-top :20px;
  padding-left:20px;

`;

export const SubTitle = styled.h3`
  margin-bottom: 28px;
  text-align:center;
  padding-left:20px;
`;

export const Col = styled.div`
  margin:auto;
  width:50%;
  padding:8px;
  box-sizing:border-box;
  border-radius: 15px;

  @media(max-width:700px){
      width:100%;
    
  }
`;
export const Price_box =styled.div`
  background:#fff;
  color:#555;
  list-style-type:none;
  border:1px solid #555;
  margin:0;
  padding:0;
  transition:0.3s;
  width:100%;

  .hover{
    box-shadow: 0 10px 15px 0 #000;
  }

  .header{
    background-color:#111;
    color:#fff;
    font-size:25px;
  }

  li{
    padding:20px;
    border-bottom:1px solid #eee;
    text-align:center;
  }
`;
/*

export const Button = styled.div`
  font-size:20px;
  background-color:#7878D8;
  border:none;
  color:#fff;
  padding: 10px 15px;
  text-align:center;
  text-decoration:none;
  font-size:18px;
  max-width: 265px;
  margin-top: 30px;
  margin-left: 6.3em;
  border-radius: 6px;
  cursor: pointer;

`;
*/

export const Button =styled.div`
  font-size:20px;
  background-color:#1A74E2;
  border:none;
  color:#fff;
  padding: 10px 15px;
  text-align:center;
  text-decoration:none;
  font-size:25px;
  width: 265px;
  border-radius: 6px;
  cursor: pointer;
  height: 70px;
  
  padding: 20px;
  position: relative;
  margin:auto;
  margin-top: 20px;
  

  @media(max-width:900px){
    margin-left:30%;
    margin-bottom:40px;
    width:200px;

    :after{
      right: 88px;
    }
  }
`;


export const Emp =styled.li`
  background-color:#f4f4f4;
  font-size:20px;
`;

export const Head = styled.li`
  
  background-color:#1A74E2;
  color:#fff;
  font-size:25px;
`;
