import styled from "styled-components";

export const Content = styled.div`
  > .inputs {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
    > :nth-child(1) {
      width: 100%;
    }
    > :nth-child(2) {
      width: 100%;
    }
    > .rating:hover p {
      opacity: 0;
    }
    > .rating:hover .stars label{
      opacity: 1;
      color: ${({theme}) => theme.COLORS.GRAY_INPUT};
    }
  }

  > .inputs .rating {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({theme}) => theme.COLORS.GRAY_INPUT};
    border: none;
    border-radius: 10px;
    height: 56px;
    padding: 16px;
    position: relative;

    > .stars {
      position: absolute;
      bottom: 16px;
    }

    > .stars input {
      display: none;
    }
    
    > .stars label {
      margin-right: 10px;
      cursor: pointer;
      float: right;
      opacity: 0;
    }

    > .stars input:checked ~ label,
    label:hover,
    label:hover ~ label {
      color: ${({theme}) => theme.COLORS.PINK};
      transition: color 0.3s;
      opacity: 1;
    } 
  }

  > h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 40px 0 24px;
  }

  > .markers {
    background-color: ${({theme}) => theme.COLORS.BG_MARKERS};
    padding: 16px;
    border-radius: 10px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  > .buttons {
    display: flex;
    gap: 40px;
    margin-top: 40px;

    > :nth-child(1) {
      background-color: ${({theme}) => theme.COLORS.BG_MARKERS};
      color: ${({theme}) => theme.COLORS.PINK};
    }

    > :nth-child(1),
    :nth-child(2) {
      width: 100%;
      padding: 17px 0;
    }
  }
`;