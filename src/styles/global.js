import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size:62.5%;
  }

  body{
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    *:not(.Toastify *){
      font-size: 1.6rem;
      font-weight:400;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-decoration: none;
      list-style: none;
    }
    
    button{
      cursor: pointer;
      &:hover{
        filter: opacity(0.8);
      }
    }
  }


 
  

`;
