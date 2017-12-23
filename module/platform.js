"use strict";
const map = require("../common/map.js");
const room = require('./room.js');
let platform = function platform() {
  //房间列表
  this.rooms = new map.Map();
  this.create_room = create_room;

};
function generate_room_no() {
  var room_no = "";
  for (var i = 0; i < 6; ++i) {
    roomId += Math.floor(Math.random() * 10);
  }
  return room_no;
}
function create_room(player, config) {
  if (config.ROUND_PRICE > player.diamond) {
    //钻石不够，请充值  
  }
  let room = new room();
  let room_no = this.generate_room_no();
  room.room_no = room_no;
  room.creator = player;
  room.players.push(player);
  this.rooms.put(room_no, room);
  console.log('room create success,room_no is ' + room_no);
  console.log('current room list is ' + rooms);
}
exports.platform = platform;