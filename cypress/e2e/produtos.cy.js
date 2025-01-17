/// <reference types= "cypress"/>

describe("Teste de API em Cupons", () => {
  let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy";

  const randomNumber = Math.floor(Math.random() * 10000);
  const cupomCode = `cupomTeste${randomNumber}`;

  it("Deve listar todos os cupons com sucesso - GET", () => {
    cy.request({
      method: "GET",
      url: "coupons",
      headers: { authorization: token },
    }).should((response) => {
      expect(response.status).equal(200);
      const coupons = response.body;

      const ids = coupons.map((coupon) => coupon.id);
      const uniqueIds = [...new Set(ids)];

      expect(ids.length).to.equal(uniqueIds.length);
    });
  });

  it("Deve cadastrar um cupom e listar todos os cupons com sucesso - POST e GET", () => {
    cy.request({
      method: "POST",
      url: "coupons",
      headers: { authorization: token },
      body: {
        code: cupomCode,
        amount: "10",
        discount_type: "percent",
        description: "qualquer coisa",
      },
    }).should((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("id");
      expect(response.body.code).to.equal(cupomCode);

      const createdCouponId = response.body.id;

      cy.request({
        method: "GET",
        url: "coupons",
        headers: { authorization: token },
      }).should((getResponse) => {
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body).to.be.an("array");

        const coupons = getResponse.body;
        const createdCoupon = coupons.find(
          (coupon) => coupon.id === createdCouponId
        );

        expect(createdCoupon).to.exist;
        expect(createdCoupon.code).to.equal(cupomCode);
        expect(createdCoupon.amount).to.equal("10.00");
      });
    });
  });
});
