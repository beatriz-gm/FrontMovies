import { FiLock, FiMail } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/input";
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>
        <h2>Log in</h2>
        
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
        onChange={ e => setPassword(e.target.value)}
        onKeyPress={handleEnter}
        />

        <Button title="Log in" onClick={handleSignIn} />
        
        <ButtonText to="/signUp" title=" Create account" />
        
      </Form>
      <Background/>
    </Container>
  )
}