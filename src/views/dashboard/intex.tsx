import React from "react";
import { createServer, Model } from "miragejs";

export const Dashboard = () => {
  createServer({
    models: {
      client: Model,
    },
    seeds(server) {
      server.db.loadData({
        clients: [
          {
            id: 1,
            client: "pessoa física",
            nome: "Augusto",
            sobrenome: "Botella",
            cpf: "1815218151",
            email: "349237489@gmail.com",
            telefone: "7137182930",
            cep: "70770000",
            rua: "Logo ali",
            numero: "600",
            cidade: "Lá longe",
            estado: "Rio de Janeiro",
            horario: "06:00",
            dia: "quarta-feira",
            veículo: "carro",
            createdAt: new Date("2021-05-10 21:00:00"),
          },
          {
            id: 2,
            client: "pessoa Jurídica",
            nome: "Cursos",
            razao: "LTDA",
            cnpj: "19.105.694/0001-50",
            email: "349237489@gmail.com",
            telefone: "7137182930",
            cep: "70770000",
            rua: "Logo ali",
            numero: "600",
            cidade: "Lá longe",
            estado: "Rio de Janeiro",
            horario: "06:00",
            dia: "quarta-feira",
            veículo: "carro",
            createdAt: new Date("2021-05-10 21:00:00"),
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";
      this.get("/clients", () => {
        return this.schema.all("client");
      });
      this.post("/clients", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("client", data);
      });
    },
  });

  return <h1>Testeee</h1>;
};
