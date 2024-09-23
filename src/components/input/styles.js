import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({theme}) => theme.COLORS.GRAY_INPUT};
  height: 56px;
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    width: 100%;
    padding: 16px;
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    border: none;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_INPUT};
    }
  }
  > svg {
      margin-left: 16px;
    }

`;