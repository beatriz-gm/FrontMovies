import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;  
  height: 56px;
  
  background-color: ${({theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  border: ${({theme, isNew}) => isNew ? ` 3px dashed ${theme.COLORS.BACKGROUND_INPUT}` : "none"};
  
  > button, input {
    border: none;
    background: none;
    margin-right: 16px;
    
    color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE };
    
    > svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }

  > input {
    margin-left: 16px;
    max-width: 80px;
  }

`;