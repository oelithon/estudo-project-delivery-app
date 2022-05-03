const newUser = {
  name: 'Otto Albuquerque',
  password: '19naosao20',
  email: 'ottoBoy@otto.com',
}

const createdUser = {
  id: 36,
  dataValues: {
    name: 'Otto Albuquerque',
    password: '1a1e66b4d9a1a89cdf95827c9f3ec399',
    email: 'ottoBoy@otto.com',
    role: 'customer',

  },
}

const returnRegister = {
  id: 36,
  password: '1a1e66b4d9a1a89cdf95827c9f3ec399',
  email: 'ottoBoy@otto.com',
  name: 'Otto Albuquerque',
  token: 'eyJhbGciOiJIUzI1NiJ9.MzY.2Eb3JETH-kbvvaSYOarqLiZGs2cXSQZFnjXT9atjvh0',
  role: 'customer',
}

const nullEmail = {
  name: 'Otto Albuquerque',
  password: '19naosao20',
}

const nullName = {
  email: 'ottoBoy@otto.com',
  password: '19naosao20',
}

const nullPassword = {
  name: 'Otto Albuquerque',
  email: 'ottoBoy@otto.com',
}

const invalidEmail = {
  name: 'Otto Albuquerque',
  password: '19naosao20',
  email: 'ottoBoycom',
}

const invalidName = {
  name: 'Otto',
  password: '19naosao20',
  email: 'ottoBoy@otto.com',
}

const invalidPassword = {
  name: 'Otto Albuquerque',
  password: '190',
  email: 'ottoBoy@otto.com',
}


module.exports = {
  newUser,
  returnRegister,
  createdUser,
  nullEmail,
  invalidEmail,
  invalidPassword,
  invalidName,
  nullPassword,
  nullName,
};
