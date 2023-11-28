const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./api/swagger');

// Middleware para análise de corpo JSON
app.use(express.json());

// Caminho completo para o arquivo config.json
const configPath = path.join(__dirname, 'config.json');

// Lê o conteúdo do arquivo config.json
const configFile = fs.readFileSync(configPath, 'utf8');

// Converte o conteúdo do arquivo para um objeto JavaScript
const config = JSON.parse(configFile);

// Adicione a documentação Swagger como um endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Rotas do backend
const usersRouter = require('./api/routes/users');
app.use('/api', usersRouter);

// Rota principal do frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(config.server.port, () => {
  console.log(`Server listening at http://localhost:${config.server.port}`);
});
s