require('dotenv').config();
// demo using subscribed feeds
const GTT = require('gdax-trading-toolkit');
const logger = GTT.utils.ConsoleLoggerFactory();
console.log("env :"+process.env.GDAX_API_KEY);
const options = {
  logger: logger,
  channels: ['matches', 'user'],
  auth: {
    key: process.env.GDAX_API_KEY,
    secret: process.env.GDAX_API_SECRET,
    passphrase: process.env.GDAX_PASSPHRASE,
  },
  wsUrl: null,
  apiUrl: null,
};
if (!options.auth.key || !options.auth.secret) {
  logger.log('error', 'Api wrong');
  process.exit(1);
}
GTT.Factories.GDAX.getSubscribedFeeds(options, ['BTC-USD', 'LTC-USD']).then((feed) => {
  feed.on('data', (msg) => {
    const level= msg.type === 'match' ? 'debug' : 'info';
    logger.log(level, `${msg.type} received`, msg);
  });
});
