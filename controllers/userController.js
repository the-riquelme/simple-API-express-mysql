const db = require('../database/connection');

//CRUD
module.exports = {
  async getById(req, res) {
    const id = req.params.id;
    try {
      const response = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async getAll(req, res) {
    try {
      const response = await db.query('SELECT * FROM users');
      res.json(response[0]);
    } catch (error) {
      console.log(error);
    }
  },
  async insert(req, res) {
    try {
      const response = await db.query('INSERT INTO users SET ?', [req.body]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    const id = req.params.id;
    try {
      const response = await db.query('UPDATE users SET ? WHERE id = ?', [req.body, id]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    const id = req.params.id;
    try {
      const response = await db.query('DELETE FROM users WHERE id = ?', [id]);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  }
};
