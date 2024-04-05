var ffi = require('ffi-napi');

var libGfx = ffi.Library('libGfx', {
  'test': [ 'int', []]
});

var myLib = ffi.Library('myLib', {
  'add': [ 'int', [ 'int', 'int' ] ],
  'sub': [ 'int', [ 'int', 'int' ] ]
});
console.log(myLib.add(2,2)); 
console.log(myLib.sub(5,2)); 

libGfx.test(); 
