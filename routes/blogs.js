const User = require('../models/user'); // Import User Model Schema
const Blog = require('../models/blog'); // Import Blog Model Schema
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

  router.get('/newBlog', (req, res) => { // TODO: change URL
    res.send('test worked');
  });

  return router; // Return router object to main index.js
}