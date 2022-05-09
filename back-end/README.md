# Boas vindas ao repositório de BackEnd da aplicação Delivery App!

## Vamos te guiar nas principais funcionálidades de nossa API, como fazer requisições e respostas esperadas.

### Requisitos
- NodeJS: version 16.0.0 ou superior;
- MySQL: version 8.0.29;

* As demais dependencias encontram-se especificadas no arquivo package.json desse repositório. Siga os passos da sessão "Como funciona?" para iniciar a API. 

### Configuração

Para começar a utilizar a API:

1. Faça um clone deste reposítório em sua máquina.
`inserir o link do repositório aqui.`

2. Em seu terminal, execute o comando `npm install` para instalar todas as dependências necessárias.

3. Precisaremos configurar um arquivo .env com algumas variáveis de ambiente que serão úteis a nossa aplicação. Siga o exemplo abaixo:

Exemplo:

- No diretório /back-end, crie um arquivo .env para configurar suas variáveis de ambiente, para isso, execute em seu terminal o comando `touch .env`, abra seu editor de código, em seguida abra o arquivo .env criado, cole o exemplo de váriaveis de ambiente abaixo alterando APENAS as suas credenciais do MySQL Local de sua máquina.

```js script
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

5. Por fim, vamos a parte mais divertida! Consumir nossa API.
Execute o comando `npm start`, a API irá rodar na porta http://localhost:3001/