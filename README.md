# 🚀 Home Broker - NestJS + Docker

Bem-vindo ao **Home Broker**, um projeto desenvolvido com **NestJS** e **Docker** para gerenciamento de ativos e ordens de compra/venda. Esta aplicação expõe uma API REST para interagir com um banco de dados **MongoDB** utilizando **Mongoose**.

## 📦 Tecnologias Utilizadas
- **NestJS** ⚡ (Framework Node.js)
- **Docker** 🐳 (Containerização)
- **MongoDB** 🍃 (Banco de Dados NoSQL)
- **Mongoose** 📄 (ORM para MongoDB)

## 🎯 Funcionalidades
✅ Listar ativos (Assets) - `GET /api/assets`
✅ Criar ativos (Assets) - `POST /api/assets`
✅ Criar ordens (Orders) - `POST /api/orders`
✅ Listar ordens (Orders) - `GET /api/orders`

## 📌 Estrutura dos Dados

### 🏦 Ativos (Assets)
```json
{
  "_id": "1",
  "symbol": "AAPL"
}
```

### 📜 Ordens (Orders)
```json
{
  "id": "(gerado automaticamente)",
  "asset": "1",
  "price": 150.50
}
```
*(O status pode ser: `open`, `pending` ou `closed`)*

## 🛠️ Como Rodar o Projeto
1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/imersao2.git
cd imersao2
```

2. **Suba o projeto com Docker** 🐳
```bash
docker-compose up -d
```

3. **API rodando!** 🎉 Acesse em: `http://localhost:3000`

## 📡 Testando a API
Para facilitar os testes, foi criado um arquivo `api.http` contendo exemplos de requisições HTTP.
Basta utilizar o plugin **REST Client** no VS Code para testar as rotas.

## 📜 Licença
Este projeto está sob a licença MIT.

