const dotenv = require('dotenv');

dotenv.config();
console.log('APP_PORT:', process.env.APP_PORT);
console.log('APP_BASE_URL:', process.env.APP_BASE_URL);
console.log('MONGO_URI:', process.env.MONGO_URI);
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// app listens to .env defined port
app.listen(process.env.APP_PORT, () => {
  logger.info(`App server running on: ${process.env.APP_BASE_URL}`);
});
