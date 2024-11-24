# API-Reserva
## 📋 Funcionalidades
- __CRUD de Usuários:__ Gerenciamento de usuários com endpoints para criar, ler, atualizar e deletar.
- __Gerenciamento de Experiências:__ Recursos para buscar, criar, atualizar e deletar experiências.
- __Sistema de Avaliações:__ Permite criar e visualizar avaliações associadas a experiências e usuários.
- __Sistema de Reservas:__ Possibilita a reserva de experiências por usuários.
- __Busca por Local:__ Endpoints otimizados para pesquisar experiências por localização.
- __Validações Avançadas:__ Verificação de existência e consistência entre entidades, como usuários e experiências.
- __Mensagens de Erro Informativas:__ Respostas claras e amigáveis para casos de erro ou falha nas operações.

## 🚀 Tecnologias Utilizadas
- __Node.js:__ Plataforma para desenvolvimento do servidor backend.
- __Express:__ Framework para criação da API.
- __Knex.js:__ Query builder para facilitar interações com o banco de dados.
- __PostgreSQL:__ Banco de dados relacional utilizado.
- __UUID v7:__ Gerador de identificadores únicos para entidades.
- __Postman:__ Ferramentaa recomendada para testar os endpoints.

## ⚙️ Instalação e Execução
__Pré-requisitos__
- __Node.js__ e npm instalados em sua máquina.
- Banco de dados __PostgreSQL__ configurado.
  
__Passos para executar o projeto__

__1.Clone o repositório:__
```
git clone https://github.com/usuario/Rick-and-Morty-API-Backend.git
cd Rick-and-Morty-API-Backend
```
__2.Instale as dependências:__
```
npm install
```
__3.Configure o banco de dados:__
```
Edite o arquivo src/config/database.js para adicionar as credenciais do seu banco PostgreSQL.
```
__4.Inicie o servidor:__
```
npm start
```
__5.Teste os endpoints:__
```
Utilize ferramentas como Postman para testar os endpoints disponíveis.
```

