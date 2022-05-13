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
// { productId, quantity, totalProductPrice }
const checkProductExist = (product, allProducts) => {
  if (allProducts.length > 0) {
    return allProducts.some((objProduct) => objProduct.productId === product.productId);
  }
  return false;
};

const incrementProduct = (product, allProducts) => {
  allProducts.forEach((objProduct) => {
    if (objProduct.productId === product.productId) {
      objProduct.quantity += 1;
      objProduct.price += product.price;
    }
  });
  saveProducts(allProducts);
};

export const addProduct = (product) => {
  if (product) {
    const allProducts = getAllProducts();
    if (checkProductExist(product, allProducts)) {
      return incrementProduct(product, allProducts);
    }
    return saveProducts([...allProducts, { ...product, quantity: 1 }]);
  }
};

const checkProductQuantity = (product, allProducts) => {
  if (allProducts.length > 0) {
    return allProducts.some((objProduct) => (
      objProduct.productId === product.productId && objProduct.quantity > 1));
  }
  return false;
};

const decrementProduct = (product, allProducts) => {
  allProducts.forEach((objProduct) => {
    if (objProduct.productId === product.productId) {
      objProduct.quantity -= 1;
      objProduct.price -= product.price;
    }
  });
  saveProducts(allProducts);
};

// função remove produtos do localStorage quando passar o productId do produto
export const removeProduct = (product) => {
  const allProducts = getAllProducts();
  if (checkProductQuantity(product, allProducts)) {
    return decrementProduct(product, allProducts);
  }
  return saveProducts(allProducts.filter((prodCar) => (
    prodCar.productId !== product.productId)));
};
