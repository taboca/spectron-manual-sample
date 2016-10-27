var Application = require('spectron').Application;
var electron    = require('electron-prebuilt');

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
