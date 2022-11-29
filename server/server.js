// Require express
const express = require("express");
const router = require('express').Router();
// Initialize express
const app = express();
const PORT = 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const ingredients = require('./routes/ingredients');

const swaggerDefinition = {
    openapi: '3.0.3',
    info: {
        title: 'Swagger Cake API',
        version: '0.0.2',
        description:
            'API for bake off cake ingredients',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },
    tags: [
        {
            "name": "cake",
            "description": "Cake ingredients"
        }
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.use(express.urlencoded({ extended: true }));

// create a server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => res.status(200).json({ status: "ok" }))

app.use('/', ingredients);

app.get('/swagger.json', function (req, res) {
     res.setHeader('Content-Type', 'application/json');
     res.send(swaggerSpec);
});
