import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px 132px 65vh;
  grid-template-areas: 
  "header"
  "mainTitle"
  "main";

  .moviesTitle {
    margin: 50px 123px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: mainTitle;
  }
  > .movies {
    grid-area: main;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 123px;
    margin-bottom: 50px;
  }
  > .movies::-webkit-scrollbar {
    width: 27px;
  }
  > .movies::-webkit-scrollbar-thumb {
    border: 10px solid ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 18px;
    background-color: ${({theme}) => theme.COLORS.PINK};
  }
  > .movies > div:hover {
      animation: hoverShine .3s ease-in-out forwards;
      cursor: pointer;
    }

  @keyframes hoverShine {
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(.99);
    }
  }

`;