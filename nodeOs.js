
const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total Memory:- ' + totalMem/(1024*1024) + ' Mbytes');
console.log('Free Memory:- ' + freeMem/(1024*1024) + ' Mbytes');