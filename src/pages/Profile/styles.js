import styled from "styled-components";

export const Container = styled.div`
width: 100%;

> header {
  height: 144px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_MOVIES};
  
  > :nth-child(1) {
    position: absolute;
    padding: 60px;
    padding-left: 144px;
    }

  > button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
    
    display: flex;
    justify-content: center;
    align-items: center;
    }
  }

  > * input {
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  `;

export const Avatar = styled.div`
position: relative;

> img {
    display: flex;
    margin: -85px auto 64px;
    border-radius: 50%;
    height: 186px;
    width: 186px;
    object-fit: cover;
  }

  > label {
    position: absolute;
    bottom: 4px;
    right: 85px;

    height: 48px;
    width: 48px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
     height: 20px;
     width: 20px;
     color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
    }
  }

  > input {
    display: none;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  
  > :nth-child(3) {
    margin-bottom: 24px;
  }

  > a {
    width: 100%;
    margin-top: 24px;
    opacity: 0.5;
  }
`;