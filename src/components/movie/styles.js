import styled from "styled-components";

export const Container = styled.div`
  > .movie {
    height: auto;
    width: 100%;
    padding: 32px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIES};

    > .rating {
      margin: 8px 0 15px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;

      > svg {
      color: ${({theme}) => theme.COLORS.PINK};
      margin-right: 6px;
    }
    }
    
    > p {
      font-family: "Roboto", sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-bottom: 15px;
    }

    > .tags {
      display: flex;
      gap: 8px;
    }
  }
`;