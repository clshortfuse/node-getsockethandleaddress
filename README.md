# nodejs-getsocketaddress

Usage:

```
const getSocketHandleAddress = require('getsockethandleaddress');

function getSocketHandle(socket) {
  return getSocketHandleAddress.getAddress(socket._handle);
}
```

On Linux, this just returns `_handle.fd`, but on Windows, it extracts the handle from libuv.
