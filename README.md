# UniSENAI_App_Consulta_Medica_Atividade2-Mobile

## Comandos para executar a aplicação

Abrir 2 terminais no VS Code

### Backend
  - `cd backend` Navegar para a pasta do backend
  - `npm install` Instalar dependências
  - `npx prisma generate` Gerar o cliente do Prisma
  - `npx prisma migrate dev --name init` Criar as tabelas no banco de dados
  - `npm run dev` Iniciar o servidor backend

### Frontend
  - `cd frontend/app-consultas` Navegar para a pasta do frontend
  - `npm install` Instalar dependências
  - `npx expo start --clear` Iniciar o Expo (Metro Bundler)

### Comandos de Troubleshooting
Se der problemas: <br/>
  - No frontend - Limpar cache
    - `npx expo start --clear` <br/><br/>

  - No backend - Recriar banco
    - `npx prisma migrate reset --force`
    - `npx prisma migrate dev --name init`
