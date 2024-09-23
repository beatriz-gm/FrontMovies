import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "backButton"
  "main";
  grid-template-rows: 116px 70px 70vh;

  > a {
    grid-area: backButton;
    margin: 40px auto 24px 125px;
  }

  > :nth-child(3)::-webkit-scrollbar {
    width: 27px;
  }
  > :nth-child(3)::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border: 10px solid ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 18px;
  }
`;

export const Main = styled.div`
  grid-area: main;
  margin: 0 125px 70px;
  overflow-y: scroll;
  animation: showUp 1s ease-in-out;

  > h1 {
      font-size: 36px;
      font-weight: 600;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      margin-bottom: 40px;
    }

    @keyframes showUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;