import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 5px 16px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.WHITE_TAG};
  }
  
`;