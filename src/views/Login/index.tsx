import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/input";
import { apiLogin } from "../../services/api";
import { Container } from "./styles";

interface IDataInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const [dataInput, setDataInput] = useState<IDataInputs>({} as IDataInputs);
  console.log(dataInput);

  const handleAuth = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      apiLogin.post("session", dataInput).then((res) => {
        localStorage.setItem("@token", res.data.token);
        history.push("/dash");
      });
    },
    [dataInput, history]
  );

  return (
    <Container onSubmit={handleAuth}>
      <Input
        name="login"
        placeholder="escreva seu email"
        label="Email"
        type="email"
        onChange={(e: any) =>
          setDataInput({ ...dataInput, email: e.target.value })
        }
      />
      <Input
        name="password"
        placeholder="escreva sua senha"
        label="password"
        type="password"
        onChange={(e: any) =>
          setDataInput({ ...dataInput, password: e.target.value })
        }
      />
      <button type="submit">Entrar</button>
    </Container>
  );
};
