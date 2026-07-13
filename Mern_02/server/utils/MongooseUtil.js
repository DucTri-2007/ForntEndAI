const mongoose = require('mongoose');

console.log('--- [MongooseUtil] Initializing Mock Database Mode ---');

// Mock mongoose.connect to resolve successfully without a real DB connection
mongoose.connect = async function (uri, options) {
  console.log('[Mock DB] Connection established successfully.');
  return mongoose;
};

// Mock mongoose connection events
mongoose.connection = {
  readyState: 1,
  on: (event, callback) => {
    if (event === 'connected' || event === 'open') {
      callback();
    }
  },
  once: (event, callback) => {
    if (event === 'connected' || event === 'open') {
      callback();
    }
  }
};

module.exports = {};
