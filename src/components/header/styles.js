import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 116px;
  width: 100%;

  display: flex;
  align-items: center;
  grid-area: header;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.PURPLE_BORDER};

  > :nth-child(2) {
    width: 100%;
  }
  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 900;
    margin: 0 64px 0 123px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  > section {
    margin: 0 9px 0 64px;
    align-items: end;
    justify-content: end;
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 14px;
      font-weight: 900;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    > a {
      font-size: 14px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_INPUT};
    }
  }

  > img {
    border-radius: 50%;
    border: 1.5px solid ${({theme}) => theme.COLORS.PURPLE_BORDER};
    height: 64px;
    width: 64px;
    margin-right: 123px;
    object-fit: cover;
  }

`;

export const UserProfile = styled(Link)`

`;