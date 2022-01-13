var localtunnel = require('localtunnel');
localtunnel(
  5000,
  { subdomain: 'sjkdfgoqiuncewsrskjhjhytsewawevbqpy' },
  function(err, tunnel) {
    console.log('LT running');
  }
);
