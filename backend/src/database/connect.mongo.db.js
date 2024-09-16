const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();
const logger = require('../middleware/winston.logger');

const connectionString = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
dotenv.config();

const connectDatabase = async () => {
  try {
    // eslint-disable-next-line no-console
    console.log('MONGO_URI:', process.env.MONGO_URI);
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        logger.info('Connection established to MongoDB database successfully!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};

module.exports = connectDatabase;
