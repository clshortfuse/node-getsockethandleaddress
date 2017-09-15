const os = require('os');

if (os.platform() === 'win32') {
  const bindings = require('bindings')('getsockethandleaddress.node');
  module.exports = bindings;
} else {
  function getAddress(handle) {
    return handle.fd;
  }
  module.exports = {
    getAddress,
  }
}
