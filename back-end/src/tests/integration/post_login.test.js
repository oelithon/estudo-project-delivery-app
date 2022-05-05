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
} = require('../mocks/userMocks');
const { CREATED, BAD_REQUEST, OK, NOT_FOUND } = require('../../api/helpers/statusCode');
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