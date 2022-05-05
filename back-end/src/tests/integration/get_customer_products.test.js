const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { Product } = require('../../database/models');
const { allProducts, token } = require('../mocks/productMock');
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('../../api/helpers/statusCode');
const { tokenIsRequired } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /customer/products', () => {
  let goodRespnse;

  before(async () => {
    sinon
      .stub(Product, 'findAll')
      .returns(allProducts);
    goodRespnse = await chaiRequest(app)
      .get('/customer/products')
      .set({ Authorization: token });   
  });
  after(() => {
    Product.findAll.restore();
  })

  it('Testa que é possível listar todos os produtos', () => {
    const { body } = goodRespnse;
    expect(body).to.be.an('array');
    expect(body).to.be.lengthOf(11);
    for (let index = 0; index < 11; index +=1 ) {
      expect(body[index]).to.haveOwnProperty('id');
      expect(body[index]).to.haveOwnProperty('name');
      expect(body[index]).to.haveOwnProperty('price');
      expect(body[index]).to.haveOwnProperty('url_image');
    }

  });

});

describe('Rota /customer/products', () => {
  let authorizationError;

  before(async () => {
    sinon
      .stub(Product, 'findAll')
      .returns(allProducts);
    authorizationError = await chaiRequest(app)
      .get('/customer/products');
  });
  after(() => {
    Product.findAll.restore();
  })

  it('Testa que não é possivel listar os produtos sem o token', () => {
    const { body } = authorizationError;

    expect(body).to.be.an('object');
    expect(authorizationError).to.have.status(NOT_FOUND);
    expect(body).to.haveOwnProperty('error');
    expect(body.error).to.be.equal(tokenIsRequired.error);
  });

});

describe('Rota /customer/products', () => {
  let internalError;

  before(async () => {
    sinon
      .stub(Product, 'findAll')
      .throws(new Error)
    internalError = await chaiRequest(app)
      .get('/customer/products')
      .set({ Authorization: token });   

  });
  after(() => {
    Product.findAll.restore();
  })

  it('Testa que a API retorna erro caso não consrica se conectar com o DB', () => {
    const { body } = internalError;

    expect(body).to.be.an('object');
    expect(internalError).to.have.status(INTERNAL_SERVER_ERROR);
    expect(body).to.haveOwnProperty('error');
  });

});
