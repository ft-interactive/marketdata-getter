import * as d3Request from 'd3-request';

export default function(key) {
  if (!key) console.error('no key specified');

  const data = {};

  var callback = function(d){ console.log('DATA', d) };
  var error = function(e){ console.log('ERROR', e) };

  function getter(symbol){
    if( data[symbol] !== undefined){
      callback( data[symbol] );
    }else{
      d3Request.json('http://markets.ft.com/research/webservices/securities/v1/quotes?symbols=' + symbol + '&source=' + key, 
      function(err, jsonData){
        if (err !== null){
          error(err);
          return;
        }
        data[symbol] = jsonData;
        callback(data[symbol]);
      }) 
    }
  }

  getter.data = function(){
    return data;
  }

  getter.callback = function(f){
    callback = f;
    return getter;
  }

  getter.error = function(f){
    error = f;
    return getter;
  }

  return getter;
};
