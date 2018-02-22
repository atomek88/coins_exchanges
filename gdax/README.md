# coins 

Tomek Michalik - Gdax market feed test:

Tomaszs-MacBook:gdax tomaszmichalik$ node GdaxOrderBook.js
2018-02-21T05:41:06.479Z - info: Creating new Websocket connection to wss://ws-feed.gdax.com 
2018-02-21T05:41:06.966Z - debug: Connection to wss://ws-feed.gdax.com  has been established.
2018-02-21T05:41:06.967Z - debug: Sending message to WS server type=subscribe, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, 4=LTC-USD, 0=level2, 1=matches, 2=ticker, 3=user, 4=heartbeat
2018-02-21T05:41:07.835Z - debug: GDAX Feed subscriptions confirmed type=subscriptions, name=level2, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=matches, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=ticker, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=user, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=heartbeat, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD
1000  messages received
LTC-USD: level: 152	snapshot: 1	ticker: 1	unknown: 1
BTC-USD: level: 92	snapshot: 1	ticker: 2	trade: 1	unknown: 1
ETH-BTC: level: 31	snapshot: 1	ticker: 1	unknown: 1
ETH-USD: level: 711	snapshot: 1	ticker: 1	unknown: 1
2000  messages received
2018-02-21T06:25:04.013Z - debug: GDAX Feed subscriptions confirmed type=subscriptions, name=level2, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=matches, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=ticker, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=user, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD, name=heartbeat, 0=LTC-USD, 1=BTC-USD, 2=ETH-BTC, 3=ETH-USD
{ type: 'level',
  time: 2018-02-21T06:25:04.537Z,
  price: '11136.99000000',
  size: '0.015',
  count: 1,
  sequence: 107,
  productId: 'BTC-USD',
  side: 'sell',
  origin: 
   { type: 'l2update',
     product_id: 'BTC-USD',
     time: '2018-02-21T06:25:04.504Z',
LTC-USD: level: 72	snapshot: 1	ticker: 2	trade: 1	unknown: 1
BTC-USD: level: 321	snapshot: 1	ticker: 3	trade: 2	unknown: 1
ETH-BTC: level: 47	snapshot: 1	ticker: 1	unknown: 1
ETH-USD: level: 542	snapshot: 1	ticker: 1	unknown: 1
{ type: 'level',
  time: 2018-02-21T06:25:05.743Z,
  price: '886.58000000',
  size: '9',
  count: 1,
  sequence: 543,
  productId: 'ETH-USD',
  side: 'buy',
  origin: 
   { type: 'l2update',
     product_id: 'ETH-USD',
     time: '2018-02-21T06:25:05.711Z',
     changes: [ [Array] ] } }
{ type: 'level',
  time: 2018-02-21T06:25:06.887Z,
  price: '224.27000000',
  size: '0',
  count: 1,
  sequence: 205,
  productId: 'LTC-USD',
  side: 'sell',
  origin: 
   { type: 'l2update',
     product_id: 'LTC-USD',
     time: '2018-02-21T06:25:06.854Z',
     changes: [ [Array] ] } }
2000  messages received
LTC-USD: level: 337	snapshot: 1	ticker: 7	trade: 12	unknown: 1
BTC-USD: level: 527	snapshot: 1	ticker: 4	trade: 4	unknown: 1
ETH-BTC: level: 82	snapshot: 1	ticker: 1	unknown: 1
ETH-USD: level: 1015	snapshot: 1	ticker: 2	trade: 1	unknown: 1
{ type: 'level',
  time: 2018-02-21T06:25:08.188Z,
  price: '223.02000000',
  size: '20',
  count: 1,
  sequence: 338,
  productId: 'LTC-USD',
  side: 'buy',
  origin: 
   { type: 'l2update',
     product_id: 'LTC-USD',
     time: '2018-02-21T06:25:08.156Z',
     changes: [ [Array] ] } }
{ type: 'level',
  time: 2018-02-21T06:25:09.344Z,
  price: '11069.35000000',
  size: '0.00346407',
  count: 1,
  sequence: 633,
  productId: 'BTC-USD',
  side: 'sell',
  origin: 
   { type: 'l2update',
     product_id: 'BTC-USD',
     time: '2018-02-21T06:25:09.312Z',
     changes: [ [Array] ] } }