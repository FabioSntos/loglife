import { useClients } from "../../hooks/useClients";

import { Container } from "./styles";

export const ClientsTable = () => {
  const { clients } = useClients();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">ID DO CLIENTE </th>
            <th>NOME FANTASIA ou NOME DO CLIENTE</th>
            <th>RAZÃO SOCIAL ou SOBRENOME DO CLIENTE</th>
            <th>TIPO DE PESSOA (jurídica ou física)</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                {client.client === "Pessoa Fisica" ? (
                  <td>{client.nomeClient}</td>
                ) : (
                  <td>{client.nomeEmpresa}</td>
                )}
                {client.client === "Pessoa Fisica" ? (
                  <td>{client.sobrenome}</td>
                ) : (
                  <td>{client.razao}</td>
                )}

                <td>{client.client}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
