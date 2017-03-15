# market-getter

For getting data from FT market data in interactive graphics apps

usage 
```js
var getter = marketdata.marketdata(process.env.MARKETKEY)
    .callback(function(d){
      console.log(d.data.items[0].basic.name + ' stock price');
      console.log(d.data.items[0].quote.lastPrice);
    });

getter('AAPL');
```

This isnt in npm yet but you can install it in you npm/yarn by adding the foolowing line to your depndencies
```js
"marketdata-getter": "git+https://github.com/ft-interactive/marketdata-getter.git"
```

TODO:

Be a bit smarter about dealing with multi symbol requests
i.e. at that moment using the symbol `AAPL,XOM` will return an set of set of results and will be hashed as `AAPL,XOM` as distinct from `XOM,AAPL` so a request for the latter will result in a new http request. I don't think this is what we want tot happen