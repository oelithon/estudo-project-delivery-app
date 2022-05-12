const USER_KEY = 'user';
const PRODUCTS_KEY = 'products';

const emptyUser = {
  name: '',
  email: '',
  role: '',
  token: '',
};

// função para remover qualquer coisa do localStorage,
// só passar o nome da chave que quer deletar
export const removeLocalStorage = (key) => localStorage.removeItem(key);

// função para ler info de user do localStorage
export const readUser = () => {
  if (!JSON.parse(localStorage.getItem(USER_KEY))) {
    localStorage.setItem(USER_KEY, JSON.stringify(emptyUser));
  }
  return JSON.parse(localStorage.getItem(USER_KEY));
};

// função para salvar info de user do localStorage
export const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));

// função para ler produtos no localStorage
export const getAllProducts = () => {
  if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(PRODUCTS_KEY));
};

const saveProducts = (products) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  return getAllProducts();
};

// função para adicionar um produto no localStorage,
// ela tb retorna os produtos do localStorage
export const addProduct = (product) => {
  if (product) {
    const allProducts = getAllProducts();
    return saveProducts([...allProducts, product]);
  }
};

// função remove produtos do localStorage quando passar o id do produto
export const removeProduct = (product) => {
  const allProducts = getAllProducts();
  saveProducts(allProducts.filter((prodCar) => prodCar.id !== product.id));
};
