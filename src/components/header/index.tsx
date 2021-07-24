import { Container } from "./styles";

interface IHeaderProps {
  onOpenNewClientModal: () => void;
}

export const Header = ({ onOpenNewClientModal }: IHeaderProps) => {
  return (
    <Container>
      <button onClick={onOpenNewClientModal} type="button">
        Cadastrar
      </button>
    </Container>
  );
};
