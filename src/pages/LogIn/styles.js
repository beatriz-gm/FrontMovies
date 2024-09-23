import styled from 'styled-components';
import bgCinema from '../../assets/bgCinema.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: 700;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
  }

  > h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin: 48px 0;
  }
  > a {
    margin: 16px 0 26px;
  }
`;

export const Background = styled.div`
  background: url(${bgCinema}) no-repeat center center;
  background-size: cover;
  flex: 1;
`;