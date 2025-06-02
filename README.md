# Elite Tracker API

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

API para o Elite Tracker desenvolvida com TypeScript, Express e MongoDB.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (com Mongoose)
- [ESLint](https://eslint.org/) para padronização de código

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- MongoDB (local ou Atlas)

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MaiaAndrey31/Elite-API.git
   cd Elite-API
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   PORT=4000
   MONGODB_URI=sua_uri_de_conexao_mongodb
   ```

## 🚦 Executando a aplicação

```bash
# Modo desenvolvimento (com hot-reload)
npm run dev

# Build do projeto
npm run build

# Iniciar em produção
npm start
```

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar linter
npm run lint

# Corrigir problemas de formatação
npm run lint:fix
```

## 📝 Endpoints

### GET /
Retorna uma mensagem de boas-vindas.

**Exemplo de resposta:**
```json
{
  "message": "Bem-vindo à API do Elite Tracker"
}
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Andrey Maia](https://github.com/MaiaAndrey31)
