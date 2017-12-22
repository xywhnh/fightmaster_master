//var db = require('../utils/db');
require('player.js');
let id = null;
let creator = null;
let players = [];
let max_player = 3;

function join(player,room) {
  if(players.length>=max_player){
    
    return -1;//房间已满
  }
  let s = player;
};
function leave(player,room) {

};
function create(player){
  
  
  this.create = player;
  this.players.push(player);
}

function validate(){
  
}