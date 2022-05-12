const USER_KEY = 'user';
const PRODUCTS_KEY = 'products'

const emptyUser = {
  name: '',
  email: '',
  role: '',
  token: '',
};

// função para remover qualquer coisa do localStorage, 
// só passar o nome da chave que quer deletar
const removeLocalStorage = (key) => localStorage.removeItem(key)


// funçõe para ler info de user do localStorage
const readUser = () => {
  if (!JSON.parse(localStorage.getItem(USER_KEY))) {
    localStorage.setItem(USER_KEY, JSON.stringify(emptyUser));
  }
  return JSON.parse(localStorage.getItem(USER_KEY))
};


// funçõe para salvar info de user do localStorage
const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));


// função para ler produtos no localStorage
const readProducts = () => {
  if (!JSON.parse(localStorage.getItem(PRODUCTS_KEY))) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(PRODUCTS_KEY))
};

const saveProducts = (products) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  return readProducts()
}


// função para adicionar um produto no localStorage, 
// ela tb retorna os produtos do localStorage
export const addProductInLocalStorage = (product) => {
  if (product) {
    const allProducts = readProducts();
    return saveProducts([...allProducts, product]);
  }
};

// função remove produtos do localStorage quando passar o id do produto
export const removeProduct = (product) => {
  const allProducts = readProducts();
  saveproducts(allProducts.filter((prodCar) => prodCar.id !== product.id));
};