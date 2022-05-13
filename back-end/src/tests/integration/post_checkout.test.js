const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Sale, SaleProduct, Product } = require('../../database/models');
const { createdSale, bodyRequstCreate, token } = require('../mocks/ordersMock');
const { OK, NOT_FOUND, BAD_REQUEST } = require('../../api/helpers/statusCode');
const { notFound } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota POST /checkout', () => {
  let goodResponse;

  before(async () => {
    sinon
      .stub(Sale, 'create')
      .returns(createdSale);
    sinon
      .stub(SaleProduct, 'create')
      .returns(true)
    goodResponse = await chaiRequest(app)
      .post('/checkout')
      .send(bodyRequstCreate)
      .set({ Authorization: token });


  });
  after(() => {
    Sale.create.restore();
    SaleProduct.create.restore();
  })

  it('Testa se é possível criar uma Sale', () => {
    const { body: {id, userId, sellerId, totalPrice, status} } = goodResponse;

    expect(goodResponse.body).to.be.an('object');
    expect(goodResponse).to.have.status(OK);
    expect(id).to.be.equal(15);
    expect(userId).to.be.equal(37);
    expect(sellerId).to.be.equal(bodyRequstCreate.sellerId);
    expect(totalPrice).to.be.equal(bodyRequstCreate.totalPrice);
    expect(status).to.be.equal('Pendente');

  });

});
