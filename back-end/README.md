# Boas vindas ao repositório de BackEnd da aplicação Delivery App!

## Vamos te guiar nas principais funcionalidades de nossa API, como fazer requisições e respostas esperadas.

### Requisitos
- NodeJS: version 16.0.0 ou superior;
- MySQL: version 8.0.29;

* As demais dependencias encontram-se especificadas no arquivo package.json desse repositório. Siga os passos da sessão seguinte para iniciar a configuração da API. 

### Configuração

Para começar a utilizar a API:

1. Faça um clone deste reposítório em sua máquina.
`inserir o link do repositório aqui.`

2. Em seu terminal, execute o comando `npm install` para instalar todas as dependências necessárias.

3. Precisaremos configurar um arquivo `.env` com algumas variáveis de ambiente que serão úteis a nossa aplicação. Siga o exemplo abaixo:

Exemplo:

- No diretório `/back-end`, crie um arquivo `.env` para configurar suas variáveis de ambiente, para isso, execute em seu terminal o comando `touch .env`, abra seu editor de código, em seguida abra o arquivo `.env` criado, cole o exemplo de váriaveis de ambiente abaixo alterando APENAS as suas credenciais do MySQL Local de sua máquina.

```dotenv
  NODE_ENV=development
  API_PORT=3001
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=yourUsername
  MYSQL_PASSWORD=yourPassword
  MYSQL_DB_NAME=delivery-app
  EVAL_ALWAYS_RESTORE_DEV_DB=true
```

4. Após instalação das dependencias, execute o comando `npm run db:reset` para configurar um banco de dados de exemplo que será consumido por nossa API.

5. Por fim, vamos a parte mais divertida! Consumir a API Delivery App.
Execute o comando `npm start`, a API irá rodar na porta http://localhost:3001/

---

### Endpoints

#### Rota `/login`

> Realizando o login da pessoa consumidora

- Agora que configuramos a API e já temos um banco de dados de exemplo para trabalhar, podemos então realizar o login na aplicação utilizando o endpoint `/login`. Faça uma requisição do tipo POST utilizando os dados do exemplo abaixo:

http://localhost:3001/login

```json
{
	"email": "zebirita@email.com",
	"password": "$#zebirita#$"
}
```

Sua resposta será um objeto contendo informações do usuário cadastrado, como por exemplo:

```json
{
	"id": 3,
	"name": "Cliente Zé Birita",
	"email": "zebirita@email.com",
	"role": "customer",
	"token": "token gerado ao realizar o login com sucesso"
}
```
---

#### Rota `/register`

> Cadastrando uma pessoa usuária

- O endpoint `/register`, permite que você realize o cadastro de uma nova pessoa usuária na base de dados. Faça uma requisição do tipo POST utilizando os dados do exemplo abaixo:

http://localhost:3001/register

```json
{
  "name": "Otto Albuquerque",
  "password": "19naosao20",
  "email": "ottoBoy@otto.com"
}
```

A requisição na rota `/register` por padrão faz o cadastro de uma pessoa usuária com a `role` do tipo `customer`, mas caso queira cadastrar outro tipo, basta informar a chave `role` nas requisições, que essa chave pode receber também os tipos `administrador` e `seller`.

Sua resposta será um objeto contendo informações do usuário cadastrado, como por exemplo:

```json
{
	"id": 4, // id do cadastro realizado
	"name": "Otto Albuquerque",
	"email": "ottoBoy@otto.com",
	"role": "customer", // tipo de atrubuição
	"token": "token gerado ao realizar o cadastro com sucesso"
}
```
---

#### Rota `/checkout`

> Obter lista de vendedores

- O endpoint `/checkout`, permite que você realize a busca por todos os vendedores cadastrados na base de dados. Para isso, faça uma requisição do tipo GET na rota http://localhost:3001/checkout.

Sua resposta será um objeto contendo informações dos vendedores, como por exemplo:

```json
{
	"id": 2, // id do vendedor
	"name": "Fulana Pereira", // nome completo
	"email": "fulana@deliveryapp.com", // e-mail
	"role": "seller" // tipo de pessoa usuária
}
```

> Realizando um pedido

- Ainda no endpoint `/checkout`, você pode realizar o checkout de uma venda desde que a pessoa usuária tenha feito login com sucesso. Então, faça uma requisição do tipo POST utilizando os dados do exemplo abaixo:

http://localhost:3001/checkout

```json
{
  "sellerId": 2, // id do vendedor selecionado
  "totalPrice": 150.49, // valor total da compra realizada
  "deliveryAddress": "Rua Exemplo Teste", // endereço para entrega do pedido
  "deliveryNumber": "123", // número do local de entrega
  "products": [ // array com os itens do carrinho de compras
    {
    "productId": 2, // id do produto presente no carrinho de compras
    "quantity": 5 // quantidade
    },
    {
    "productId": 6, // id do produto presente no carrinho de compras
    "quantity": 2 // quantidade
    }
  ]
}
```

Sua resposta será um objeto contendo informações da venda confirmada, como por exemplo:

```json
{
	"saleDate": "2022-05-09T20:30:22.235Z", // datetime do momento da venda
	"status": "Pendente", // status de pedido
	"id": 2, // id do pedido realizado
	"sellerId": 2, // id do vendedor selecionado
	"totalPrice": 150.49, // valor total da compra realizada
	"deliveryAddress": "Rua Exemplo Teste", // endereço para entrega do pedido
	"deliveryNumber": "123", // número do local de entrega
	"userId": 3, // id da pessoa usuária logada que realizou o pedido
	"date": "9/5/2022" // data do pedido
}
```
---

#### Rota `/customer/products`

> Listar todos os produtos

- No endpoint `/customer/products`, é possível realizar a busca de todos os produtos cadastrados na base de dados, desde que a pessoa usuária tenha feito login com sucesso. Para isso, faça uma requisição do tipo GET na rota http://localhost:3001/customer/products.

Sua resposta será um array de objetos contendo informações de todos os produtos cadastrados, como por exemplo:

```json
[
	{
		"id": 1,
		"name": "Skol Lata 250ml",
		"price": "2.20",
		"url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
	},
	{
		"id": 2,
		"name": "Heineken 600ml",
		"price": "7.50",
		"url_image": "http://localhost:3001/images/heineken_600ml.jpg"
	},
	{
		"id": 3,
		"name": "Antarctica Pilsen 300ml",
		"price": "2.49",
		"url_image": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
	},
  //...
]
```
---

#### Rota `/customer/orders`

> Listar todos os pedidos realizados pela pessoa usuária

- No endpoint `/customer/orders`, é possível realizar a busca de todos os pedidos realizados pela pessoa usuária, desde que tenha feito login com sucesso. Para isso, faça uma requisição do tipo GET na rota http://localhost:3001/customer/orders.

Sua resposta será um array de objetos contendo informações de todos os pedidos, como por exemplo:

```json
[
  //...
	{
		"id": 2, // id do pedido realizado
		"userId": 3, // id da pessoa usuária logada que realizou o pedido
		"sellerId": 2, // id do vendedor selecionado
		"totalPrice": "150.49", // valor total da compra realizada
		"deliveryAddress": "Rua Exemplo Teste", // endereço para entrega do pedido
		"deliveryNumber": "123", // número do local de entrega
		"saleDate": "2022-05-09T20:30:22.000Z", // datetime do momento da venda
		"status": "Pendente", // status de pedido
		"user_id": 3,
		"date": "9/5/2022"
	}
  //...
]
```
---

#### Rota `/customer/orders/:id`

> Lista um pedidos realizado pela pessoa usuária de forma específica através do id

- No endpoint `/customer/orders/:id`, é possível realizar a busca de um pedido realizado pela pessoa usuária, através do id do pedido cadastrado, também é necessário que tenha feito login com sucesso. Para isso, faça uma requisição do tipo GET na rota http://localhost:3001/customer/orders/1.

Sua resposta será um objeto contendo informações do pedido, como por exemplo:

```json
{
	"id": 1, // id do pedido realizado
	"userId": 3, // id da pessoa usuária logada que realizou o pedido
	"sellerId": 2, // id do vendedor selecionado
	"totalPrice": "200.33", // valor total da compra realizada
	"deliveryAddress": "rua josé das couves", // endereço para entrega do pedido
	"deliveryNumber": "n 301", // número do local de entrega
	"saleDate": "2022-05-09T19:01:52.000Z", // datetime do momento da venda
	"status": "Pendente", // status de pedido
	"user_id": 3,
	"products": [ // array com os itens do pedido
		{
			"id": 2,
			"name": "Heineken 600ml",
			"price": "7.50",
			"url_image": "http://localhost:3001/images/heineken_600ml.jpg",
			"quantity": 5
		},
		{
			"id": 6,
			"name": "Skol Beats Senses 313ml",
			"price": "4.49",
			"url_image": "http://localhost:3001/images/skol_beats_senses_313ml.jpg",
			"quantity": 2
		}
	],
	"date": "9/5/2022"
}
```
