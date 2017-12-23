//var db = require('../utils/db');
const player = require('player.js');
const path = require('path');
const root_path = path.resolve(__dirname, '..');
const config = require(root_path + '/config.js');
const max_player = 3;
let id = null;
let creator = null;
let players = [];


function join(player, room) {
  if (players.length >= max_player) {

    return -1;//房间已满
  }
  let s = player;
};
function leave(player, room) {

};
function create(player) {
  if (config.ROUND_PRICE > player.diamond) {
    //钻石不够，请充值  
  }

  this.create = player;
  this.players.push(player);
}

function validate() {

}