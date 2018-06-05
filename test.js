var Application = require('spectron').Application;
var electron    = require('electron-prebuilt');

var app = new Application({
  path: electron, args:['.'],env: {ELECTRON_ENABLE_LOGGING: true}
})

app.start().then(


  function started() {

    app.client.getMainProcessLogs().then(function (logs) {
      logs.forEach(function (log) {
        console.log('main log: '+ log)
      })
    })

    app.client.getRenderProcessLogs().then(function (logs) {
    	  logs.forEach(function (log) {
    	    console.log('Render log: '+ log.message + ' - '+ log.source + ' - '+ log.level)
    	  });
    	});


  },
  function not_started() {
    // app.start failed..
  }
);
