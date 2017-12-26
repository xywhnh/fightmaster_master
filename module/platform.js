"use strict";
const map = require("../common/map.js");


function Platform() {

  //房间列表
  this.rooms = new map.Map();

  //在线玩家列表
  this.online_players = new map.Map();

  const room_service = require('./room.js');

  //生成房间号
  function generate_room_no() {
    var room_no = "";
    for (var i = 0; i < 6; ++i) {
      room_no += Math.floor(Math.random() * 10);
    }
    return room_no;
  }


  this.create_room = function (creator) {
    const room = new room_service.room();
    // if (config.ROUND_PRICE > player.diamond) {
    //   //钻石不够，请充值  
    // }
    //
    let room_number = generate_room_no();
    room.room_no = room_number;
    //room.creator = creator;
    //room.players.put(creator.id, creator);
    this.get_room().put(room_number, room);
    console.log('room create success,room_no is ' + room_number);
    console.log('current room list is ' + this.rooms);
    return room;
  }
  this.destroy_room = function (room_no) {
    this.rooms.remove(room_no);
  }


 

  

  this.get_room = function () {
    return this.rooms;
  }
};
exports.Platform = Platform;
