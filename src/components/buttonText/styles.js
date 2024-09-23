import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.PINK};
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  :hover {
    animation: shake 1s ease-in-out;
  }

  @keyframes shake {
    50% {
      transform: translateX(-10px);
    }
  }
`;