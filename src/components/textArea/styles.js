import styled from "styled-components";

export const Container = styled.textarea`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({theme}) => theme.COLORS.GRAY_200};
  height: 274px;
  width: 100%;
  border-radius: 10px;
  padding: 16px;

  border: none;
  resize: none;
  
  &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;