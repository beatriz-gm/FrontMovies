import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIES};
  background-color: ${({theme}) => theme.COLORS.PINK};
  
  padding: 13px 32px;
  border-radius: 10px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`;