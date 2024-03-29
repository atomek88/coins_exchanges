require('dotenv').config();
//import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges";
//import { LiveBookConfig, LiveOrderbook, SkippedMessageEvent, TradeMessage } from "gdax-trading-toolkit/build/src/core";
//import { Ticker } from "gdax-trading-toolkit/build/src/exchanges/PublicExchangeAPI";
//import { CumulativePriceLevel } from "gdax-trading-toolkit/build/src/lib";
/* dont need imports from above - Gdax OrderFeed  - Tomasz Michalik
use GTT.xyz.Obj to get objects needed for creating gdax client */
const GTT = require('gdax-trading-toolkit');

const products = ['LTC-USD', 'BTC-USD', 'ETH-BTC', 'ETH-USD', 'LTC-USD'];
const logger = GTT.utils.ConsoleLoggerFactory({ level: 'debug' });
//const subFeeds = GTT.factories.getSubscribedFeeds
// authorization for gdax with env variables
const auth = {
  key: process.env.GDAX_API_KEY,
  secret: process.env.GDAX_API_SECRET,
  passphrase: process.env.GDAX_PASSPHRASE,
};
// FUTURE : try to integrate all connections into 1 singleton object
const exchangesCollection = () => {
  this.totalConnections = 0;
  this.exchList = {};
}
//const printOrderbook = GTT.util.printOrderbook;
//const printTicker = GTT.utils.printTicker;
// tally test
const tallies = {};
products.forEach((product) => {
  tallies[product] = {};
});
let count = 0;
// Gdax factory Tomasz Michalik
// test creating orderbook, called getSubscribedFeeds under the hood?
GTT.Factories.GDAX.FeedFactory(logger, products, auth).then((feed) => {
  feed.on('data', (msg) => {
    count++;
    if (!msg.productId) {
      tallies.other += 1;
    } else {
      const tally = tallies[msg.productId];
      if (!tally[msg.type]) {
        tally[msg.type] = 0;
      }
      tally[msg.type] += 1;
    }
    if (count % 1000 == 0) {
      printTallies();
    }
    if (count % 500 == 0) {
      console.log(msg);
    }
  });
}).catch((err) => {
  logger.log('error', err.message);
  process.exit(1);
});

// create subscribed feeds only?

// create future placeorder message object  (PlaceOrderMessage)
const placeOrder = {
    time: new Date(),
    type: 'placeOrder',
    productId: 'BTC-USD', // change
    clientId: null,
    price: '10',
    size: '1',
    side: 'buy',
    orderType: 'limit',
    postOnly: true
};
/* function to place order on gdax with format above, error called
GTT.DefaultAPI().placeOrder(placeOrder).then((o) => {
    console.log(`Order ${o.id} successfully placed`);
    return gdax.loadOrder(o.id);
}).then((o) => {
    console.log(`Order status: ${o.status}, ${o.time}`);
    return gdax.cancelOrder(o.id);
}).then((id) => {
    console.log(`Order ${id} has been cancelled`);
}).catch(logError);
// log error if no order placed
function logError(err) {
    console.log(err.message, err.response ? `${err.response.status}: ${err.response.body.message}` : '');
}
   //config live book object
  const config : LiveBookConfig = {
    product: product,
    logger: logger
  }; // connect to live order book with products and logger
  const book = new LiveOrderbook(config);
  // order book ON action => { REDO to print to page}
  book.on('LiveOrderbook.snapshot', () => {
        logger.log('info', 'Snapshot received by LiveOrderbook Demo');
        setInterval(() => {
            console.log(printOrderbook(book, 10));
            printOrderbookStats(book);
            logger.log('info', `Cumulative trade volume: ${tradeVolume.toFixed(4)}`);
        }, 5000);
    });
    book.on('LiveOrderbook.ticker', (ticker: Ticker) => {
        console.log(printTicker(ticker));
    });
    book.on('LiveOrderbook.trade', (trade: TradeMessage) => {
        tradeVolume += +(trade.size);
    });
    book.on('LiveOrderbook.skippedMessage', (details: SkippedMessageEvent) => {
        // On GDAX, this event should never be emitted, but we put it here for completeness
        console.log('SKIPPED MESSAGE', details);
        console.log('Reconnecting to feed');
        feed.reconnect(0);
    });
    book.on('end', () => {
        console.log('Orderbook closed');
    });
    book.on('error', (err) => {
        console.log('Livebook errored: ', err);
        feed.pipe(book);
    });

  feed.pipe(book);
});*/
function printTallies() {
  console.log(`${count}  messages received`);
  for (let p in tallies) {
    let types = Object.keys(tallies[p]).sort();
    let tally = types.map(t =>`${t}: ${tallies[p][t]}`).join('\t');
    console.log(`${p}: ${tally}`);
  }
}

//module.exports = exports = GdaxOrderBook;
