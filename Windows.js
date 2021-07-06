var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Menhera Little Girl',
  description: 'Bot de Menhera Little Girl',
  script: 'C:\\[DISCORD BOTS]\\Menhera Little Girl\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();