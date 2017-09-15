{
  "targets": [
    {
      "target_name": "getsockethandleaddress",
      "conditions": [
        ["OS == 'win'", {
          "sources": [ "getSocketHandleAddress.cc" ]
        }]
      ]
    }
  ]
}
