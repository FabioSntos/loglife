import { Input } from "../../components/input";

export const Login = () => {
  return (
    <div>
      <Input
        name="login"
        placeholder="escreva seu email"
        label="Email"
        type="email"
      />
    </div>
  );
};
