const panquecaOrders = [
  {
    dataValues: {
      id: 15,
      userId: 37,
      sellerId: 2,
      totalPrice: "200.33",
      deliveryAddress: "rua josé das couves",
      deliveryNumber: "n 301",
      saleDate: new Date("2022-05-06T22:15:27.000Z"),
      status: "Pendente",
      user_id: 37
    },
  },
  {
    dataValues: {
      id: 16,
      userId: 37,
      sellerId: 2,
      totalPrice: "250.57",
      deliveryAddress: "rua josé das couves",
      deliveryNumber: "n 301",
      saleDate: new Date("2022-05-09T15:29:23.000Z"),
      status: "Pendente",
      user_id: 37
    },
  },
];

const returnsOrders = [
  {
    id: 15,
    userId: 37,
    sellerId: 2,
    totalPrice: "200.33",
    deliveryAddress: "rua josé das couves",
    deliveryNumber: "n 301",
    saleDate: "2022-05-06T22:15:27.000Z",
    status: "Pendente",
    user_id: 37,
    date: "6/5/2022"
  },
  {
    id: 16,
    userId: 37,
    sellerId: 2,
    totalPrice: "250.57",
    deliveryAddress: "rua josé das couves",
    deliveryNumber: "n 301",
    saleDate: "2022-05-09T15:29:23.000Z",
    status: "Pendente",
    user_id: 37,
    date: "9/5/2022"
  }
];

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsIm5hbWUiOiJQYW5xdWVjYSBBbGJ1cXVlcnF1ZSIsImVtYWlsIjoicHVua3B1bmtAcHVuay5jb20iLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NTE4NzUxNTR9.X24kn36RAAb-VyYM75rQCH4Tj6BpB6bDhIFXMiC_lVU";
const tokenSeller = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY1MjM4Njk3MH0.Jx9-jFkpXU3BAO-Akdg31YefVckrSvJ8cqPObWLhxZg"
const order15 = {
  id: 15,
  userId: 37,
  sellerId: 2,
  totalPrice: "200.33",
  deliveryAddress: "rua josé das couves",
  deliveryNumber: "n 301",
  saleDate: "2022-05-06T22:15:27.000Z",
  status: "Preparando",
  user_id: 37,
  products: [
    {
      id: 2,
      name: "Heineken 600ml",
      price: "7.50",
      url_image: "http://localhost:3001/images/heineken_600ml.jpg",
      quantity: 5
    },
    {
      id: 6,
      name: "Skol Beats Senses 313ml",
      price: "4.49",
      url_image: "http://localhost:3001/images/skol_beats_senses_313ml.jpg",
      quantity: 2
    }
  ]
};

const findOrder = {
  dataValues: {
    date: null,
  },
  id: 15,
  userId: 37,
  sellerId: 2,
  totalPrice: '200.33',
  deliveryAddress: 'rua josé das couves',
  deliveryNumber: 'n 301',
  saleDate: new Date("2022-05-06T22:15:27.000Z"),
  status: 'Pendente',
  user_id: 37,
  products: [
    {
      dataValues: {
        id: 2,
        name: 'Heineken 600ml',
        price: '7.50',
        url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
      },
      SaleProduct: { dataValues: { quantity: 5 }, },
    },
    {
      dataValues: {
        id: 6,
        name: 'Skol Beats Senses 313ml',
        price: '4.49',
        url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
      },
      SaleProduct: { dataValues: { quantity: 2 } },
    }
  ]
};

const createdSale = {
  dataValues: {
    date: null,
  },
  id: 15,
  userId: 37,
  sellerId: 2,
  totalPrice: 200.33,
  deliveryAddress: 'rua josé das couves',
  deliveryNumber: 'n 301',
  saleDate: new Date("2022-05-06T22:15:27.000Z"),
  status: 'Pendente',
  user_id: 37,
};

const bodyRequstCreate = {
  sellerId: 2,
  totalPrice: 200.33,
  deliveryAddress: "rua josé das couves",
  deliveryNumber: "n 301",
  products: [
      {
          productId: 3,
          quantity: 5
      },
      {
          productId: 1,
          quantity: 2
      },
      {
          productId: 9,
          quantity: 2
      }
  ]
}

module.exports = {
  findOrder,
  panquecaOrders,
  returnsOrders,
  token,
  createdSale,
  bodyRequstCreate,
  order15,
  tokenSeller,
}
