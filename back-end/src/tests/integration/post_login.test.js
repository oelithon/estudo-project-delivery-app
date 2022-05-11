const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { User } = require('../../database/models');
const {
  loginUser,
  returnLogin,
  createdUser,
  returnRegister,
  nullEmail,
  invalidEmail,
  invalidPassword,
  nullPassword,
} = require('../mocks/userMocks');
const { OK, NOT_FOUND, BAD_REQUEST } = require('../../api/helpers/statusCode');
const { notFound } = require('../../api/helpers/errorMessages');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /login', () => {
  let goodRespnse;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .returns(createdUser);
    goodRespnse = await chaiRequest(app)
      .post('/login')
      .send(loginUser);
   
  });
  after(() => {
    User.findOne.restore();
  })

  it('Testa se é possível fazer o login de um usuário', () => {
    const { body: { name, email, role, id } } = goodRespnse;

    expect(goodRespnse.body).to.be.an('object');
    expect(goodRespnse).to.have.status(OK);
    expect(goodRespnse.body).to.haveOwnProperty('token');
    expect(id).to.be.equal(returnRegister.id);
    expect(name).to.be.equal(returnRegister.name);
    expect(role).to.be.equal(returnRegister.role);
    expect(email).to.be.equal(returnRegister.email);

  });

});


describe('Rota /login', () => {
  let errorRespnse;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .throws(new Error)
    errorRespnse = await chaiRequest(app)
      .post('/login')
      .send(loginUser);
   
  });
  after(() => {
    User.findOne.restore();
  })

  it('Testa que não é possivel fazer o login caso a api não consiga se conectar com o DB', () => {
    const { body } = errorRespnse;

    expect(body).to.be.an('object');
    expect(errorRespnse).to.have.status(NOT_FOUND);
    expect(body).to.haveOwnProperty('error');
    expect(body.error).to.be.equal(notFound.error);

  });

});


describe('Rota /login', () => {
  let nullEmailResponse;
  let invalidEmailResponse;
  let nullPasswordResponse;
  let invalidPasswordResponse;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .returns(false);
    nullEmailResponse = await chaiRequest(app)
      .post('/login')
      .send(nullEmail);
    invalidEmailResponse = await chaiRequest(app)
      .post('/login')
      .send(invalidEmail);
    nullPasswordResponse = await chaiRequest(app)
      .post('/login')
      .send(nullPassword);
    invalidPasswordResponse = await chaiRequest(app)
      .post('/login')
      .send(invalidPassword);

  });
  after(() => {
    User.findOne.restore();
  })


  it('Testa que não é possível fazer o login de um usuário sem o campo "email"', () => {
    const { body } = nullEmailResponse;

    expect(nullEmailResponse).to.be.an('object');
    expect(nullEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"email" is required');
  });

  it('Testa que não é possível fazer o login de um usuário sem um "email" válido', () => {
    const { body } = invalidEmailResponse;

    expect(invalidEmailResponse).to.be.an('object');
    expect(invalidEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"email" must be a valid email');
  });

  it('Testa que não é possível fazer o login de um usuário sem o campo "password"', () => {
    const { body } = nullPasswordResponse;

    expect(nullEmailResponse).to.be.an('object');
    expect(nullEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"password" is required');
  });

  it('Testa que não é possível fazer o login de um usuário sem um "password" válido', () => {
    const { body } = invalidPasswordResponse;

    expect(invalidEmailResponse).to.be.an('object');
    expect(invalidEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"password" length must be at least 6 characters long');
  });
});
