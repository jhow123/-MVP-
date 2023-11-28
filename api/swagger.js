const swaggerJSDoc = require('swagger-jsdoc');

// Defina as opções do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jhow',
      version: '1.0.0',
      description: 'Projeto P2',
    },
  },
  // Caminho para os arquivos de comentários
  apis: ['./routes/*.js'], // Você pode especificar o diretório correto para seus arquivos de rota
};

// Exporte o swaggerSpec gerado
module.exports = swaggerJSDoc(options);
