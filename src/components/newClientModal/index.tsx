import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useClients } from "../../hooks/useClients";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";
import { Input } from "../input";

interface INewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewClientModal = ({
  isOpen,
  onRequestClose,
}: INewClientModalProps) => {
  const { createClient } = useClients();

  const [client, setClient] = useState("");
  const [situacao, setSituacao] = useState("");
  const [nomeClient, setNomeClient] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [razao, setRazao] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState(0);
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [horario, setHorario] = useState("");
  const [dia, setDia] = useState("");
  const [veiculo, setVeiculo] = useState("Moto");

  async function handleCreateNewClient(e: FormEvent) {
    e.preventDefault();

    await createClient({
      client,
      situacao,
      nomeClient,
      sobrenome,
      nomeEmpresa,
      razao,
      cpf,
      cnpj,
      email,
      telefone,
      cep,
      rua,
      numero,
      cidade,
      estado,
      horario,
      dia,
      veiculo,
    });

    setClient("");
    setSituacao("");
    setNomeClient("");
    setSobrenome("");
    setNomeEmpresa("");
    setRazao("");
    setCpf("");
    setCnpj("");
    setEmail("");
    setTelefone("");
    setCep("");
    setRua("");
    setNumero(0);
    setCidade("");
    setEstado("");
    setHorario("");
    setDia("");
    setVeiculo("Moto");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="React-modal-close"
      >
        <img src={closeImg} alt="fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewClient}>
        <h2>Cadastrar Cliente</h2>
      </Container>
    </Modal>
  );
};
