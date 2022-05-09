const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Sale } = require('../../database/models');
const { panquecaOrders, token, returnsOrders } = require('../mocks/ordersMock');
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../../api/helpers/statusCode');
const { tokenIsRequired } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /customer/orders', () => {
  let goodRespnse;

  before(async () => {
    sinon
      .stub(Sale, 'findAll')
      .returns(panquecaOrders);
    goodRespnse = await chaiRequest(app)
      .get('/customer/orders')
      .set({ Authorization: token });   
  });
  after(() => {
    Sale.findAll.restore();
  })

  it('Testa que é possível listar todos os pedidos de um determinado cliente', () => {
    const { body } = goodRespnse;
    expect(body).to.be.an('array');
    expect(body).to.be.lengthOf(2);
    for (let index = 0; index < returnsOrders.lengt; index +=1 ) {
      expect(body[index]).to.haveOwnProperty('id');
      expect(body[index]).to.haveOwnProperty('userId');
      expect(body[index]).to.haveOwnProperty('totalPrice');
      expect(body[index]).to.haveOwnProperty('deliveryAddress');
      expect(body[index]).to.haveOwnProperty('deliveryNumber');
      expect(body[index]).to.haveOwnProperty('saleDate');
      expect(body[index]).to.haveOwnProperty('status');
      expect(body[index]).to.haveOwnProperty('user_id');
      expect(body[index]).to.haveOwnProperty('date');
    }

  });

});

describe('Rota /customer/orders', () => {
  let internalError;

  before(async () => {
    sinon
      .stub(Sale, 'findAll')
      .throws(new Error)
    internalError = await chaiRequest(app)
      .get('/customer/orders')
      .set({ Authorization: token });   

  });
  after(() => {
    Sale.findAll.restore();
  })

  it('Testa que a API retorna erro caso não consiga se conectar com o DB', () => {
    const { body } = internalError;

    expect(body).to.be.an('object');
    expect(internalError).to.have.status(INTERNAL_SERVER_ERROR);
    expect(body).to.haveOwnProperty('error');
  });

});
