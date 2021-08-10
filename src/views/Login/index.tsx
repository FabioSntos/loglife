import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/input";

import { auth } from "../../services/firebase";

import { Container } from "./styles";

interface IEmailInput {
  email: string;
}
interface IPasswordInput {
  password: string;
}

export const Login = () => {
  const history = useHistory();

  function redirect() {
    if (localStorage.getItem("@RefreshToken")) {
      return history.push("/dashboard");
    }
  }

  window.onload = redirect;
  const [emailInput, setemailInput] = useState<IEmailInput>({} as IEmailInput);

  const [passwordInput, setPasswordInput] = useState<IPasswordInput>(
    {} as IPasswordInput
  );

  const handleAuth = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        auth
          .signInWithEmailAndPassword(emailInput.email, passwordInput.password)
          .then(() => {
            auth.onAuthStateChanged((user) => {
              if (user) {
                localStorage.setItem("@RefreshToken", user.refreshToken);
              }
            });
          })
          .then(() => {
            history.push("/dashboard");
          });
      } catch (error) {
        console.log(error);
      }
    },
    [emailInput, passwordInput, history]
  );
  return (
    <>
      <div>
        <h2>email: test@loglife.com</h2>
        <h2>senha: loglife</h2>
      </div>
      <Container onSubmit={handleAuth}>
        <Input
          name="login"
          placeholder="escreva seu email"
          label="Email"
          type="email"
          onChange={(e: any) =>
            setemailInput({ ...emailInput, email: e.target.value })
          }
          required
        />
        <Input
          name="password"
          placeholder="escreva sua senha"
          label="password"
          type="password"
          onChange={(e: any) =>
            setPasswordInput({ ...passwordInput, password: e.target.value })
          }
          required
        />
        <button type="submit">Entrar</button>
      </Container>
    </>
  );
};
