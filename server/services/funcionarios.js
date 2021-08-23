const db = require('./db');
const helper = require('../helper');


async function create(funcionario) {
    const result = await db.query(
        'INSERT INTO funcionarios(id, nome, cargo, dataNascimento, dataEntrada) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [funcionario.id,funcionario.nome, funcionario.cargo, funcionario.dataNascimento, funcionario.dataEntrada]
        
    );
    let message = 'Erro ao criar funcionário';

    if(result.length) {
        return{...result};
    }

    return {message};
}
async function getAll(qtde, cargo = '') {
    const limite = qtde ? `LIMIT ${qtde}`:'';
    const rows = await db.query(
        `SELECT * FROM funcionarios WHERE cargo LIKE '%${cargo}%' ${limite}`
        
    );
    
    const data = helper.emptyOrRows(rows);

    return  data;
    
}

async function getById(id) {
    
    const rows = await db.query(
      `SELECT * FROM funcionarios WHERE id = $1`,
      [id]
    );
    const funcionario = helper.emptyOrRows(rows);
  
    return  funcionario;
  }

  async function update(id, funcionario) {
    const rows = await db.query(
        'UPDATE funcionarios SET nome = $1, cargo = $2, dataNascimento = $3, dataEntrada = $4 WHERE id = $5',
        [ funcionario.nome, funcionario.cargo, funcionario.datanascimento, funcionario.dataentrada, id]
    );
    return helper.emptyOrRows(rows);
  
    
  }

  async function delet(id, funcionario) {

    const rows = await db.query(
        'DELETE FROM funcionarios  WHERE id = $1',
        [id]
    );
    return helper.emptyOrRows(rows);
  
    
  }

  module.exports = {
      create,
      getAll,
      getById,
      update,
      delet,
  }