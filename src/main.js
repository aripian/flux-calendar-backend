// import Request from 'request';
// import { logger } from './utils/logger';
import conn from '../config/connections';
import mongo from './utils/db';

const addRoom = (data, cb) => {
  const db = mongo.client.db(conn.database);
  db.collection('rooms').insertOne({ data }, (err, result) => {
    cb({
      count: result.insertedCount,
    });
  });
};

const getRoom = (data, cb) => {
  const db = mongo.client.db(conn.database);
  db.collection('rooms').find({}).toArray((err, result) => {
    cb({
      result,
    });
  });
};

const bookRoom = (data, cb) => {
  const db = mongo.client.db(conn.database);
  db.collection('bookings').insertOne({ data }, (err, result) => {
    cb({
      count: result.insertedCount,
    });
  });
};

const getAllBooking = (data, cb) => {
  const db = mongo.client.db(conn.database);
  db.collection('bookings').find({}).toArray((err, result) => {
    cb({
      result,
    });
  });
};

module.exports = {
  addRoom,
  getRoom,
  bookRoom,
  getAllBooking,
};
