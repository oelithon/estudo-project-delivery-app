const newUser = {
  name: 'Otto Albuquerque',
  password: '19naosao20',
  email: 'ottoBoy@otto.com',
}

const createdUser = {
  id: 36,
  name: 'Otto Albuquerque',
  password: '1a1e66b4d9a1a89cdf95827c9f3ec399',
  email: 'ottoBoy@otto.com',
  role: 'customer',
}

const returnRegister = {
  id: 36,
  email: 'ottoBoy@otto.com',
  name: 'Otto Albuquerque',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsIm5hbWUiOiJPdHRvIEFsYnVxdWVycXVlIiwiZW1haWwiOiJvdHRvQm95QG90dG8uY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxNzcwNjE3fQ.PLve6Pvt3xXhNlHO9iLHjD_B1ovg0hRuEO_EE2lobHk',
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

const loginUser = {
  password: '19naosao20',
  email: 'ottoBoy@otto.com',
}
const returnLogin = {
  id: 36,
  email: 'ottoBoy@otto.com',
  name: 'Otto Albuquerque',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsIm5hbWUiOiJPdHRvIEFsYnVxdWVycXVlIiwiZW1haWwiOiJvdHRvQm95QG90dG8uY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxNzcwNjE3fQ.PLve6Pvt3xXhNlHO9iLHjD_B1ovg0hRuEO_EE2lobHk',
  role: 'customer',
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
  loginUser,
  returnLogin,
};
