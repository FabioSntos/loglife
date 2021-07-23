import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useClients } from "../../hooks/useClients";

import closeImg from "../../assets/close.svg";

import {
  ClientTypeContainer,
  ClientvehicleContainer,
  Container,
  RadioBox,
} from "./styles";
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
    setVeiculo("moto");

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
        <h2>Cadastro</h2>
        <ClientTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setClient("Pessoa juridica");
            }}
          >
            <span>Pessoa Jurídica</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setClient("Pessoa Fisica");
            }}
          >
            <span>Pessoa Física</span>
          </RadioBox>
        </ClientTypeContainer>
        {client === "Pessoa Fisica" ? (
          <Input
            required
            label="Nome do Cliente"
            name="nomeClient"
            placeholder="Escreva seu nome"
            type="text"
            onChange={(e: any) => setNomeClient(e.target.value)}
          />
        ) : (
          <Input
            required
            label="nome da Empresa"
            name="NomeEmpresa"
            placeholder="Escreva o nome da sua empresa"
            type="text"
            onChange={(e: any) => setNomeEmpresa(e.target.value)}
          />
        )}

        {client === "Pessoa Fisica" ? (
          <Input
            required
            label="sobrenome do Cliente"
            name="nomeClient"
            placeholder="Escreva seu sobrenome"
            type="text"
            onChange={(e: any) => setSobrenome(e.target.value)}
          />
        ) : (
          <Input
            required
            label="razão da empresa"
            name="razao"
            placeholder="Escreva a razão"
            type="text"
            onChange={(e: any) => setRazao(e.target.value)}
          />
        )}

        {client === "Pessoa Fisica" ? (
          <Input
            required
            label="CPF"
            name="cpf"
            placeholder="Escreva seu cpf"
            type="text"
            onChange={(e: any) => setCpf(e.target.value)}
          />
        ) : (
          <Input
            required
            label="CPNJ"
            name="cpnj"
            placeholder="Escreva seu cnpj"
            type="text"
            onChange={(e: any) => setCnpj(e.target.value)}
          />
        )}
        <Input
          required
          label="Email"
          name="email"
          placeholder="Escreva seu Email"
          type="text"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          required
          label="Telefone"
          name="telefone"
          placeholder="Escreva seu Telefone"
          type="text"
          onChange={(e: any) => setTelefone(e.target.value)}
        />
        <Input
          required
          label="CEP"
          name="cep"
          placeholder="Escreva seu cep"
          type="text"
          onChange={(e: any) => setCep(e.target.value)}
        />
        <Input
          required
          label="Rua"
          name="rua"
          placeholder="nome da sua rua"
          type="text"
          onChange={(e: any) => setRua(e.target.value)}
        />
        <Input
          required
          label="numero"
          name="numero"
          placeholder="Escreva o numero da residencia"
          type="text"
          onChange={(e: any) => setNumero(e.target.value)}
        />
        <Input
          required
          label="cidade"
          name="cidade"
          placeholder="Escreva sua cidade"
          type="text"
          onChange={(e: any) => setCidade(e.target.value)}
        />
        <Input
          required
          label="Estado"
          name="Estado"
          placeholder="Escreva seu Estado"
          type="text"
          onChange={(e: any) => setNumero(e.target.value)}
        />
        <Input
          required
          label="Horário de abertura"
          name="numero"
          placeholder="Escreva o horario de abertura do estabelecimento"
          type="time"
          onChange={(e: any) => setNumero(e.target.value)}
        />
        <Input
          required
          label="Dia de Atendimento"
          name="atendimento"
          placeholder="Escreva o numero da residencia"
          type="text"
          onChange={(e: any) => setNumero(e.target.value)}
        />
        <ClientvehicleContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setVeiculo("moto");
            }}
          >
            <span>Moto</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setVeiculo("carro");
            }}
          >
            <span>Carro</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setVeiculo("caminhao");
            }}
          >
            <span>caminhão</span>
          </RadioBox>
        </ClientvehicleContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
