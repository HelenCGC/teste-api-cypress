# [US-0003] – API de cupons  

Descrição

Como admin da EBAC-SHOPQuero criar um serviço de cupomPara poder listar e cadastrar os cupons
Autenticação da API:
• Usuário: admin*ebac
• Senha: @admin!&b@c!2022
• Authorization: Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy
Regras de negócio:
GET:
• Deve listar todos os cupons cadastrado ou listar buscando por ID do cupom
• Documentação do serviço: http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons__id*
POST:
• Deve cadastrar os cupons com os campos obrigatórios abaixo:

- Código do cupom: Exemplo: “Ganhe10” - Valor: “10.00”- Tipo do desconto: “fixed_product”-Descrição: “Cupom de teste”
  • Nome do cupom não pode ser repetido;
  • Os outros campos são opcionais.
  • Documentação do serviço: http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons
  • Exemplo do body:  
  body: { "code": "nomeCupom", "amount": "10", "discount_type": "fixed_product", "description": "Cupom de desconto de teste" }

### Pré-requisito:

#### Para instalar as dependencias:

```
npm install
```

#### Para executar em moodo Headlesss via console:

```
npx cypress run
```

#### Para executar via Dashboard:

```
npx cypress open
```

Após abrir o dashboard, selecione um dos navegadores (De preferencia Electron) e siga com as execuções.

### Bibliotecas de apoio:

-Cypress: Framework de automação: https://cypress.io/
