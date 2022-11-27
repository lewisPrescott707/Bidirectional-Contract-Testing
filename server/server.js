// Require express
const express = require("express");
// Initialize express
const app = express();
const PORT = 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// parse JSON
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Content-Type', "application/json");
    next();
});
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// create a server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/ingredients/:cakeName', (req, res) => {
    const name = req.params.cakeName;
    if (name === "chocolate" || name === "0" || name === 0) {
        return res.status(200).json([
            "sugar"
        ]);
    } else {
        return res.status(404).json({
            message: "Cake not found",
        });
    }
});

app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
});
