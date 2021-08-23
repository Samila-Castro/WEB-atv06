const express = require("express");
const cors = require("cors");
const funcionario = require('../services/funcionarios');



const {
  uuid
} = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());



app.get("/funcionarios", async function (request, response, next) {
  const { qtde, cargo } = request.query;


  try {
    
    response.json(await funcionario.getAll(qtde,cargo));
  } catch (err) {
    console.error(`Erro ao buscar funcionários`, err.message);
    next(err);
  }

});

app.get("/funcionarios/:id", async function (request, response, next) {
  const {
    id
  } = request.params;

  try {
    const result = await funcionario.getById(id);
    
    response.json(result[0]);

  } catch (err) {
    console.error(`Erro ao buscar funcionário`, err.message);
    next(err);
  }

});


app.post("/funcionarios", async function (request, response, next) {

  try {
    const {
      nome,
      cargo,
      dataNascimento,
      dataEntrada
    } = request.body;
    const result = await funcionario.create({
      id: uuid(),
      nome,
      cargo,
      dataNascimento,
      dataEntrada
    });
    response.json(result);
  } catch (err) {
    console.error(`Erro ao criar funcionário`, err.message);
    next(err);
  }
});

app.put("/funcionarios/:id", async function (request, response, next) {
  const {
    id
  } = request.params
  const {
    nome,
    cargo,
    datanascimento,
    dataentrada
  } = request.body;

  try {

      const funcionarioToUpdate = { nome,
          cargo,
          datanascimento,
          dataentrada
        }
        
    const result = await funcionario.update(id , funcionarioToUpdate);
    
    response.json(result)
    


  } catch (err) {
    console.error(`Erro ao buscar funcionário`, err.message);
    next(err);
  }

});

app.delete("/funcionarios/:id", async function (request, response) {
  const {
    id
  } = request.params

  try {
    const result = await funcionario.delet(id);
    
    response.json(result[0]);

  } catch (err) {
    console.error(`Erro ao deletar funcionário`, err.message);
    next(err);
  }



});

module.exports = app;
