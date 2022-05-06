const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../app');
const Clubs = require('../database/models/club');
const { allClubs } = require('./mocks/clubsMock');

chai.use(chaiHttp);

const { expect, request: chaiRequest } = chai;

describe('Rota /login', () => {
  let godRespnse: Response;
  let nullEmailResponse: Response;
  let nullpasswordResponse: Response;
  let invalidEmailResponse: Response;
  let invalidPasswordResponse: Response;
  let validateHeades: Response;

  before(async () => {
    sinon
      .stub(User, 'findOne')
      .resolves(user as User);
    godRespnse = await chaiRequestLib(app)
      .post('/login')
      .send(validLogin);
    nullEmailResponse = await chaiRequestLib(app)
      .post('/login')
      .send(nullEmail);
    nullpasswordResponse = await chaiRequestLib(app)
      .post('/login')
      .send(nullPassword);
    invalidEmailResponse = await chaiRequestLib(app)
      .post('/login')
      .send(invalidEmail);
    invalidPasswordResponse = await chaiRequestLib(app)
      .post('/login')
      .send(invalidPassword);
    validateHeades = await chaiRequestLib(app)
      .get('/login/validate')
      .set({ Authorization: userResponse.token });

  });
  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

});