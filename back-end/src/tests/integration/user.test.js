const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { User } = require('../../database/models');
const {
  newUser,
  createdUser,
  returnRegister,
  nullEmail,
  invalidEmail,
  invalidPassword,
  invalidName,
  nullName,
  nullPassword,
} = require('../mocks/userMocks');
const { CREATED, BAD_REQUEST } = require('../../api/helpers/statusCode');

chai.use(chaiHttp);
// let chaiLib = chai;
let chaiRequest = chai.request;

const { expect } = chai;

describe('Rota /register', () => {
  let goodRespnse;
  let nullEmailResponse;
  let invalidEmailResponse;
  let nullNameResponse;
  let invalidNameResponse;
  let nullPasswordResponse;
  let invalidPasswordResponse;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .returns(false);
    sinon
      .stub(User, 'create')
      .resolves(createdUser);
    goodRespnse = await chaiRequest(app)
      .post('/register')
      .send(newUser);
    nullEmailResponse = await chaiRequest(app)
      .post('/register')
      .send(nullEmail);
    invalidEmailResponse = await chaiRequest(app)
      .post('/register')
      .send(invalidEmail);
    nullNameResponse = await chaiRequest(app)
      .post('/register')
      .send(nullName);
    invalidNameResponse = await chaiRequest(app)
      .post('/register')
      .send(invalidName);
    nullPasswordResponse = await chaiRequest(app)
      .post('/register')
      .send(nullPassword);
    invalidPasswordResponse = await chaiRequest(app)
      .post('/register')
      .send(invalidPassword);

  });
  after(() => {
    User.findOne.restore();
    User.create.restore();
  })

  it('Testa se é possível fazer o registo de um usuário', () => {
    const { body: { name, email, password, role, token } } = goodRespnse;

    expect(goodRespnse).to.be.an('object');
    expect(goodRespnse).to.have.status(CREATED);
    expect(name).to.be.equal(returnRegister.name);
    expect(role).to.be.equal(returnRegister.role);
    expect(email).to.be.equal(returnRegister.email);
    expect(password).to.be.equal(returnRegister.password);
    expect(token).to.be.equal(returnRegister.token);

  });

  it('Testa que não é possível fazer o registo de um usuário sem o campo "email"', () => {
    const { body } = nullEmailResponse;

    expect(nullEmailResponse).to.be.an('object');
    expect(nullEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"email" is required');
  });

  it('Testa que não é possível fazer o registo de um usuário sem um "email" válido', () => {
    const { body } = invalidEmailResponse;

    expect(invalidEmailResponse).to.be.an('object');
    expect(invalidEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"email" must be a valid email');
  });

  it('Testa que não é possível fazer o registo de um usuário sem o campo "name"', () => {
    const { body } = nullNameResponse;

    expect(nullEmailResponse).to.be.an('object');
    expect(nullEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"name" is required');
  });

  it('Testa que não é possível fazer o registo de um usuário sem um "name" válido', () => {
    const { body } = invalidNameResponse;

    expect(invalidEmailResponse).to.be.an('object');
    expect(invalidEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"name" length must be at least 12 characters long');
  });

  it('Testa que não é possível fazer o registo de um usuário sem o campo "password"', () => {
    const { body } = nullPasswordResponse;

    expect(nullEmailResponse).to.be.an('object');
    expect(nullEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"password" is required');
  });

  it('Testa que não é possível fazer o registo de um usuário sem um "password" válido', () => {
    const { body } = invalidPasswordResponse;

    expect(invalidEmailResponse).to.be.an('object');
    expect(invalidEmailResponse).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('"password" length must be at least 6 characters long');
  });
});

describe('Rota /register', () => {
  let userAlreadyRegistered;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .returns(true);
    sinon
      .stub(User, 'create')
      .resolves(createdUser);
    userAlreadyRegistered = await chaiRequest(app)
      .post('/register')
      .send(newUser);
  });
  after(() => {
    User.findOne.restore();
    User.create.restore();
  })

  it('Testa que não é possivel fazer um registro se o usuário já tiver um email cadastrado', () => {
    const { body } = userAlreadyRegistered;

    expect(body).to.be.an('object');
    expect(userAlreadyRegistered).to.have.status(BAD_REQUEST);
    expect(body.error).to.be.equal('Email already registered');
  });
  
});