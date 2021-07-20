import { FormEvent, useCallback, useState } from "react";

import { Input } from "../../components/input";
import { Container } from "./styles";

interface IDataInputs {
  email: string;
  password: string;
}

export const Login = () => {

  const [dataInput, setDataInput] = useState<IDataInputs>({} as IDataInputs);
  return (
    <Container>
      <Input
        name="login"
        placeholder="escreva seu email"
        label="Email"
        type="email"
        onChange={(e) => setDataInput({ ...dataInput, email: e.target.value })}
      />
      <Input
        name="password"
        placeholder="escreva sua senha"
        label="password"
        type="password"
        onChange={(e) =>
          setDataInput({ ...dataInput, password: e.target.value })
        }
      />
    </Container>
  );
};
