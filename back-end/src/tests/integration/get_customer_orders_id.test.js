const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Sale } = require('../../database/models');
const { findOrder, token, returnsOrders } = require('../mocks/ordersMock');
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../../api/helpers/statusCode');
const { tokenIsRequired } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /customer/orders/15', () => {
  let goodRespnse;

  before(async () => {
    sinon
      .stub(Sale, 'findOne')
      .returns(findOrder);
    goodRespnse = await chaiRequest(app)
      .get('/customer/orders/15')
      .set({ Authorization: token });
  });
  after(() => {
    Sale.findOne.restore();
  })

  it('Testa que é possível listar um pedido específico de um determinado cliente', () => {
    const { body } = goodRespnse;
    expect(body).to.be.an('object');
    expect(body).to.haveOwnProperty('id');
    expect(body).to.haveOwnProperty('userId');
    expect(body).to.haveOwnProperty('totalPrice');
    expect(body).to.haveOwnProperty('deliveryAddress');
    expect(body).to.haveOwnProperty('deliveryNumber');
    expect(body).to.haveOwnProperty('saleDate');
    expect(body).to.haveOwnProperty('status');
    expect(body).to.haveOwnProperty('user_id');
    expect(body.products).to.be.an('array')
    expect(body.products).to.be.lengthOf(2)
  });

});

describe('Rota /customer/orders/15', () => {
  let internalError;

  before(async () => {
    sinon
      .stub(Sale, 'findOne')
      .throws(new Error)
    internalError = await chaiRequest(app)
      .get('/customer/orders/15')
      .set({ Authorization: token });

  });
  after(() => {
    Sale.findOne.restore();
  })

  it('Testa que a API retorna erro caso não consiga se conectar com o DB', () => {
    const { body } = internalError;

    expect(body).to.be.an('object');
    expect(internalError).to.have.status(INTERNAL_SERVER_ERROR);
    expect(body).to.haveOwnProperty('error');
  });

});
