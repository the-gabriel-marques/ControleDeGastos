import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('gastos.db');

export const initDB = () => {
  try {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS gastos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT,
        categoria TEXT,
        valor REAL,
        data TEXT
      );`
    );
  } catch (error) {
    console.log('Erro ao criar tabela:', error);
  }
};

export const addGasto = (descricao, categoria, valor, data, successCallback) => {
  try {
    const result = db.runSync(
      'INSERT INTO gastos (descricao, categoria, valor, data) VALUES (?, ?, ?, ?)',
      [descricao, categoria, valor, data]
    );
    successCallback(result);
  } catch (error) {
    console.log('Erro ao inserir gasto:', error);
  }
};

export const getGastos = (successCallback) => {
  try {
    const allRows = db.getAllSync('SELECT * FROM gastos ORDER BY id DESC');
    successCallback(allRows);
  } catch (error) {
    console.log('Erro ao buscar gastos:', error);
  }
};

export const deleteGasto = (id, successCallback) => {
  try {
    const result = db.runSync('DELETE FROM gastos WHERE id = ?', [id]);
    successCallback(result);
  } catch (error) {
    console.log('Erro ao deletar gasto:', error);
  }
};

export const updateGasto = (id, descricao, categoria, valor, data, successCallback) => {
  try {
    const result = db.runSync(
      'UPDATE gastos SET descricao = ?, categoria = ?, valor = ?, data = ? WHERE id = ?',
      [descricao, categoria, valor, data, id]
    );
    successCallback(result);
  } catch (error) {
    console.log('Erro ao atualizar gasto:', error);
  }
};