/***
 * player 玩家
***/
function player(id,name) {
  this.id = id;//用户id
  this.name = name;
  this.room_no = null;//标识用户当前加入的房间，同一时刻要么为空，要么只在一个房间里
  this.coins = 1000;
  this.diamond = 1000;
  this.is_master = true;
  this.play_cards = [];
  this.socket = null;
  // this.public_func = function () {
  //   console.log('this is public func' + name);
  // };
  // var private_func = function () {
  //   console.log('this is private func' + name);
  // }

  // console.log('invoke public func in construct');
  // this.public_func();

  // console.log('invoke private func in construct');
  // private_func();
};
exports.player = player;


