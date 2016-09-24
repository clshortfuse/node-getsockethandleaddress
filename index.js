var bindings = require('bindings')('getsockethandleaddress.node');
module.exports = {
  getAddress: bindings.getAddress
};