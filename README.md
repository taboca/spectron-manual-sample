# spectron-manual-sample

The purpose of this sample is to consider the usage of Spectron as a means to connect to electron, therefore establishing a more managed control to an electron app, such as testing conditions. 

```
var Application = require('spectron').Application;
var assert      = require('assert');
var electron    = require('electron');

// Depends on promises
//var Promise = require('es6-promise').Promise;

var app = new Application({
  path: electron, args:['.']
})

app.start().then( 
  function started() {
    app.client.waitUntilTextExists('#message', 'success', 10000).then(
      function textShown() {
        console.log('Success, content loaded!!!');
        app.stop().then(
          function stopOk() {
            console.log('Quit ok!')
          },
          function stopFail() {
            // quit not ok
          }
        );
      }, 
      function timeOut() { 
        // If it passes 10 secs..
        console.log('Make sure your main app provide an HTML page with an element being id=message and its inner HTML equals to "success"');
      }
    );
  },
  function not_started() {
    // app.start failed..
  } 
);
```

[preload]: http://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions
