import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/input";
import { auth } from "../../services/api";
import { Container } from "./styles";

interface IEmailInput {
  email: string;
}
interface IPasswordInput {
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const [emailInput, setemailInput] = useState<IEmailInput>({} as IEmailInput);
  const [passwordInput, setPasswordInput] = useState<IPasswordInput>(
    {} as IPasswordInput
  );
  console.log(emailInput, passwordInput);
  const handleAuth = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        auth.signInWithEmailAndPassword(
          emailInput as any,
          passwordInput as any
        );
        history.push("/test");
      } catch (error) {
        console.log(error);
      }
    },
    [history, passwordInput, emailInput]
  );

  return (
    <Container onSubmit={handleAuth}>
      <Input
        name="login"
        placeholder="escreva seu email"
        label="Email"
        type="email"
        onChange={(e: any) =>
          setemailInput({ ...emailInput, email: e.target.value })
        }
      />
      <Input
        name="password"
        placeholder="escreva sua senha"
        label="password"
        type="password"
        onChange={(e: any) =>
          setPasswordInput({ ...passwordInput, password: e.target.value })
        }
      />
      <button type="submit">Entrar</button>
    </Container>
  );
};
