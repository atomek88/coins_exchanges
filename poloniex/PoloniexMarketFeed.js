
//import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges";
//import { LiveBookConfig, LiveOrderbook, SkippedMessageEvent, TradeMessage } from "gdax-trading-toolkit/build/src/core";
//import { Ticker } from "gdax-trading-toolkit/build/src/exchanges/PublicExchangeAPI";
//import { CumulativePriceLevel } from "gdax-trading-toolkit/build/src/lib";
const GTT = require('gdax-trading-toolkit');

let tradeVolume = 0;

const products = ['LTC-USD', 'BTC-USD', 'ETH-BTC', 'ETH-USD', 'LTC-USD'];
const logger = GTT.utils.ConsoleLoggerFactory({ level: 'debug' });

//const printOrderbook = GTT.util.printOrderbook;
//const printTicker = GTT.utils.printTicker;
// tally test
const tallies = {};
products.forEach((product) => {
  tallies[product] = {};
});
let count = 0;
// Gdax factory Tomasz Michalik
// test creating orderbook
GTT.Factories.Poloniex.FeedFactory(logger, products).then((feed) => {
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
  /* config live book object
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
