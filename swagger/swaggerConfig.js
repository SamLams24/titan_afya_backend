const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API TITAN_AFYA",
      version: "1.0.0",
      description: "Documentation de l'API TITAN_AFYA"
    },
    servers: [
      {
        url: "http://localhost:5000" // TEST
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
