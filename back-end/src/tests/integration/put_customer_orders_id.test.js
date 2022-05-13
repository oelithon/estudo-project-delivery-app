const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Sale } = require('../../database/models');
const { order15, tokenSeller } = require('../mocks/ordersMock');
const { OK, NOT_FOUND, BAD_REQUEST } = require('../../api/helpers/statusCode');
const { notFound } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota PUT /customer/orders/:id', () => {
  let goodResponse;

  before(async () => {
    sinon
      .stub(Sale, 'findOne')
      .returns(order15);
    sinon
      .stub(Sale, 'update')
      .resolves(true);
    goodResponse = await chaiRequest(app)
      .put('/customer/orders/15')
      .send()
      .set({ Authorization: tokenSeller });


  });
  after(() => {
    Sale.findOne.restore();
    Sale.update.restore();
  })

  it('Testa se é possível editar o status de uma venda', () => {
    expect(goodResponse.body).to.be.an('object');
    expect(goodResponse).to.have.status(OK);
  });

});
