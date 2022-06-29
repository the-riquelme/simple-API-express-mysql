const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const userController = require('../controllers/userController');

//tratamento do corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//rotas
app.get('/user/:id', userController.getById);
app.get('/users', userController.getAll);
app.post('/user/insert', userController.insert);
app.put('/user/update/:id', userController.update);
app.delete('/user/delete/:id', userController.delete);

app.listen(PORT, HOST);
