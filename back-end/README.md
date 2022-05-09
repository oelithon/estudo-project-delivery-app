# Boas vindas ao repositório de BackEnd da aplicação Delivery App!

## Vamos te guiar nas principais funcionálidades de nossa API, como fazer requisições e respostas esperadas.

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
{
  NODE_ENV=development
  API_PORT=3001
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=yourUsername
  MYSQL_PASSWORD=yourPassword
  MYSQL_DB_NAME=delivery-app
  EVAL_ALWAYS_RESTORE_DEV_DB=true
}
```

4. Após instalação das dependencias, execute o comendo `npm run db:reset` para configurar um banco de dados de exemplo que será consumido por nossa API.

5. Por fim, vamos a parte mais divertida! Consumir a API Delivery App.
Execute o comando `npm start`, a API irá rodar na porta http://localhost:3001/

### Endpoints

#### Rota Login

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
