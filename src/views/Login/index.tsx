import { Input } from "../../components/input";
import { Container } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Input
        name="login"
        placeholder="escreva seu email"
        label="Email"
        type="email"
      />
      <Input
        name="password"
        placeholder="escreva sua senha"
        label="password"
        type="password"
      />
    </Container>
  );
};
