// const config = require('./config.js');
// const socket_service = require("./service/socket_service");
// socket_service.start(config);


//unit test for map.js
// var map =  require('./common/map.js');
// var m1 = new map.Map();
// m1.put(1,{'a':"中国",'b':"美国"});
// console.log(m1.containsKey(1));
// console.log(m1.get(1));

// var m2 = new map.Map();
// console.log(m2.containsKey(1));


//unit test for platform.js
var type = require('./module/type.js');
var platform_module = require('./module/platform.js');
var platform_instance = new platform_module.platform();
platform_instance.create_room('any','config');