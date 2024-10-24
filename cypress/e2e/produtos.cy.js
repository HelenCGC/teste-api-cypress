/// <reference types= "cypress"/>

import { faker } from "@faker-js/faker";

describe("Teste de API em Produtos", () => {
  it("Listar produtos - GET", () => {
    cy.request({
      method: "GET",
      url: "produtos",
    }).should((response) => {
      expect(response.status).equal(200);
      expect(response.body).to.have.property("produtos");
    });
  });

  it.only("Cadastrar produto - POST", () => {
    const randomProduct = faker.commerce.product();

    let token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzI5Nzk3NTA3LCJleHAiOjE3Mjk3OTgxMDd9.TcfyhsGQzgmvLtSqxmeDAMLQoJfTzxPJ_wBirhYPTRg";
      
    cy.request({
      method: "POST",
      url: "produtos",
      headers: { authorization: token },
      body: {
        nome: randomProduct,
        preco: 120,
        descricao: "qualquer coisa",
        quantidade: 10,
      },
    });
  });
});
