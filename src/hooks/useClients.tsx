import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { ReactNode } from "react";

interface IClients {
  id: number;
  client: string;
  situacao: string;
  nomeClient?: string;
  nomeEmpresa?: string;
  razao?: string;
  sobrenome?: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  telefone: string;
  cep: string;
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  horario: string;
  dia: string;
  veiculo: string;
  createdAt: string;
}

type IClientInput = Omit<IClients, "id" | "createdAt">;

interface IClientProviderProps {
  children: ReactNode;
}

interface IClientContextData {
  clients: IClients[];
  createClient: (client: IClientInput) => void;
}

const ClientsContext = createContext<IClientContextData>(
  {} as IClientContextData
);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [clients, setClients] = useState<IClients[]>([]);

  useEffect(() => {
    api.get("/clients").then((response) => setClients(response.data.clients));
  }, []);

  async function createClient(clientInput: IClientInput) {
    const response = await api.post("/clients", {
      ...clientInput,
      createdAt: new Date(),
    });
    const { client } = response.data;
    setClients([...clients, client]);
  }

  return (
    <ClientsContext.Provider value={{ clients, createClient }}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => {
  const contex = useContext(ClientsContext);
  return contex;
};
