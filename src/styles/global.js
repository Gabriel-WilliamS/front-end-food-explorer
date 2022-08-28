import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size:62.5%;
    
    @media(max-width:1200px){
      font-size: 56.25%;
    }

    @media(max-width:1080px){
      font-size: 50%;
    }

    @media(max-width: 900px){
      font-size: 43.75%;
    }

     @media(max-width: 790px){
      font-size: 38.5%;
    }

  }

  body{ 
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    #root{
      width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    }
 
    *:not(.Toastify *){
      font-size: 1.6rem;
      font-weight:400;
      font-family: ${({ theme }) => theme.FONTS.SECONDY};
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

    a{
      cursor: pointer;
    }
  }

  @keyframes bottomToTop {
  from {
    transform: translateY(10rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}

@keyframes rightToLeft {
  from {
    transform: translateX(10rem);
    opacity: 0;
  }
  to {
    transform: translateX(0rem);
    opacity: 1;
  }
}
 
  

`;
