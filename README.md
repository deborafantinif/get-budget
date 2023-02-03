<h1 align="center">
  Get Budget
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-endpoints">End-Points</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</p>

<br>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://reactjs.org)
- [Axios](https://axios-http.com/docs/intro)
- [Express](https://expressjs.com/)
- [Chai](https://www.chaijs.com/)
- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)

## Projeto

Aplicação que realiza o middleware de uma API(mockend) de listagem de produtos e usuários e retorna o orçamento baseado nos produtos selecionados pelo usuário, além da própria listagem de usuários e produtos.

## Instalação

- Clone o repositório:

  `git clone git@github.com:deborafantinif/frontend-test.git`

- Instale as dependências:

  `npm install`

- Acesse a aplicação com o script **dev**:

  `npm run dev`

- 💡Caso queira rodar a aplicação com outros endpoits do mockend, configure o arquivo .env:

  ```
  URL_USERS=
  URL_PRODUCTS=
  PORT=
  ```


## Testes

- Para rodar os testes basta executar o scrip **test**:

  `npm run test`


## End-Points
| Método | End-Point | Descrição |
| --- | --- | --- |
| `GET` | `/products` | Lista todos os *produtos* |
| `GET` | `/users` | Lista todos os *usuários* |
| `POST` | `/users/:id/budget` | Retorna o orçamento de acordo com os pedidos selecionados |


## Requisição & Exemplos de Resposta

### GET /products
Lista todos os *produtos*
#### Exemplo de Url
`http://localhost:3001/products`
#### Request Params
`N/A`
#### Request Body
`N/A`
#### Response
```javascript
[
  {
		"id": 1,
		"name": "explicabo alias hic reprehenderit deleniti quos id reprehenderit",
		"price": 6945
	},
	{
		"id": 2,
		"name": "nostrum veritatis reprehenderit repellendus vel numquam soluta ex inventore ex",
		"price": 2435
	},
	{
		"id": 3,
		"name": "praesentium explicabo reprehenderit laudantium a pariatur ab sit pariatur quos",
		"price": 4985
	},
]
```


### GET /users
Lista todos os *usuários*
#### Exemplo de Url
`http://localhost:3001/users`
#### Request Params
`N/A`
#### Request Body
`N/A`
#### Response
```javascript
[
	{
		"id": 1,
		"name": "cvRhuZicvV",
		"tax": 79
	},
	{
		"id": 2,
		"name": "P5hBDBonm3",
		"tax": 121
	},
	{
		"id": 3,
		"name": "buTTe8n3gT",
		"tax": 82
	},
]
```

### POST /users/:id/budget
Retorna o orçamento de acordo com os pedidos selecionados
#### Exemplo de Url
`http://localhost:3001/users/{{ID}}/budget`
#### Request Params
`{{ID}}`
#### Request Body
```javascript
  {
    "prodcuts": [1, 5, 9]
  }
```
#### Response
```javascript
  "23572.81"
```
