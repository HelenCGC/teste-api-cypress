/// <reference types= "cypress"/>

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
    let token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzI5NzE1MTQ3LCJleHAiOjE3Mjk3MTU3NDd9.W4TPJQxdkw5zlz5NixdBWf2FAxHoCXJWk30514FWt7A";
    cy.request({
      method: "POST",
      url: "produtos",
      headers: { authorization: token },
      body: {
        nome: "Produto qualquer",
        preco: 120,
        descricao: "qualquer coisa",
        quantidade: 10,
      },
    });
  });
});
