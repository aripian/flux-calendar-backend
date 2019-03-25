const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    host: 'mongodb://localhost:27017',
    database: 'hotel',
  },
  staging: {
    host: 'mongodb://localhost:27017',
    database: 'hotel',
  },
  production: {
    host: 'mongodb://localhost:27017',
    database: 'hotel',
  }
};

module.exports = config[env];
