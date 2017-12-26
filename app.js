//unit test for room.js
const config = require('./config.js');
const socket_service = require("./service/socket_service");
socket_service.start(config);

// const randomInt = require('random-int');
// console.log(randomInt(2));

// Array.prototype.insert = function (index, item) {
//   this.splice(index, 0, item);
// };

// var s = [1,2,3];
// s.insert(0,4);
// s.insert(2,5);
// s.forEach(function(item) {
// 	console.log(item);
// }, this);


//unit test for map.js
// var map = require('./common/map.js');
// var mp1 = map.Map.init([{ 'key': '1', 'value': "AAA" }, { 'key': '2', 'value': 'BBB' }, { 'key': '3', 'value': 'CCC' }])
// console.log(mp1);
// var m1 = new map.Map();
// m1.put(1,{'a':"中国",'b':"美国"});
// console.log(m1.containsKey(1));
// console.log(m1.get(1));

// var m2 = new map.Map();
// console.log(m2.containsKey(1));


//unit test for platform.js
// var type = require('./module/type.js');
// var room = require('./module/room.js');
// let r1 = new room.room();

// let r2 = new room.room();


//unit test for card.js
//var card = require('./module/card.js');


//unit test for type.js
// let type = require('./common/type.js');
// console.log(type.Suits);
// console.log(type.Suits);
