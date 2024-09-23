import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIES};

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.WHITE_TAG};
  }
  
`;