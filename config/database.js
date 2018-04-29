const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
  //uri: 'mongodb://localhost:27017/mean-blog-db',
  uri: 'mongodb://jamesbcn:HMDk19@ds163119.mlab.com:63119/mean-blog',
  secret: crypto, 
  db: 'mean-blog' 
}