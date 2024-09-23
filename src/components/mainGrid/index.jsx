import { Container, Main } from "./styles";
import { Header } from '../../components/header';
import { ButtonText } from "../../components/buttonText";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function MainGrid({children}) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <Header/>
      <ButtonText 
        onClick={handleBack} 
        title="Back" 
        icon={FiArrowLeft} />
      <Main>
        {children}
      </Main>
    </Container>
  )
}