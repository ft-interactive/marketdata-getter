# market-getter

For getting data from FT market data in client side apps

usage 
```js
var getter = marketdata.marketdata(process.env.MARKETKEY)
    .callback(function(d){
      console.log(d.data.items[0].basic.name + ' stock price');
      console.log(d.data.items[0].quote.lastPrice);
    });

getter('AAPL');
```
