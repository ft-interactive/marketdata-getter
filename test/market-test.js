var tape = require("tape"),
    marketdata = require("../");

tape("marketdata() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  var getter = marketdata.marketdata(process.env.MARKETKEY)
    .callback(function(d){
      console.log(d.data.items[0].basic.name + ' stock price');
      console.log(d.data.items[0].quote.lastPrice);
    });

  getter('AAPL');
  
  //test.equal(marketdata.marketdata(), 42);
  test.end();
});
