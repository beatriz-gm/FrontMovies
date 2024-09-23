import { FiLock, FiMail, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Container, Form, Background } from '../LogIn/styles';
import { ButtonText } from '../../components/buttonText';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("All fields must be filled in");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Successfully registered user!");
      navigate(-1);
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to register user")
      }
    });
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>
        <h2>Create your account</h2>
        <Input
          type="text"
          placeholder="Name"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
          onKeyPress={handleEnter}
        />

        <Button title="Register" onClick={handleSignUp} />

        <ButtonText 
        to="/"
        icon={FiArrowLeft}
        title="Back to log in"
        /> 
        
      </Form>
      <Background/>
    </Container>
  )
}