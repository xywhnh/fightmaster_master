//var db = require('../utils/db');

const randomInt = require('random-int');
const log4js = require('log4js');
const path = require('path');
const map = require("../common/map.js");
const type = require("../common/type.js");
const player = require('./player.js');

const root_path = path.resolve(__dirname, '..');
const config = require(root_path + '/config.js');
const max_player = 3;
const cards = 54;

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
var logger = log4js.getLogger();
logger.level = 'debug';

function Room() {
  this.room_no = null;//房号
  this.running = false;
  this.players = new map.Map();
  this.deck_cards = [];//存放一整付牌
  this.bottom_cards = [];
};

/******************************************实例方法*************************************************/

//加入房间
Room.prototype.join_room = function (player, room) {
  if (this.players.length >= max_player) {
    //房间已满，禁止加入
    return false;
  }
  player.room_no = room.room_no;
  this.players.put(player.id, player);
};




//离开房间
Room.prototype.leave_room = function (player, room) {
  //todo 判断不能离开的情况

  //todo 离开房间
};

//开始
Room.prototype.room_start = function () {
  //有如下几个步骤创建一付牌、洗牌、给每个玩家分配一手牌、通知客户端
  if (!this.players || this.players.size() < max_player) {
    return;//没有任何玩家或玩家数不够
  }
  createDeck(this.deck_cards);
  shuffle(this.deck_cards);
  deal(this.players, this.deck_cards, this.bottom_cards);
  notice_client(this.players);
};



/******************************************私有方法*************************************************/

function card(name, weight, color) {
  var obj = {};
  obj.name = name;//牌的名称
  obj.weight = weight;//权重
  obj.color = color;//花色
  return obj;
};


//创建桌子里的一付牌
function createDeck(deck_cards) {
  //创建普通扑克
  for (color = 0; color < 4; color++) {
    for (value = 0; value < 13; value++) {
      const name = type.Suits.get(color) + type.Weight.get(value);
      const card_obj = card(name, type.Weight.get(value), type.Suits.get(color));
      deck_cards.push(card_obj);
    }
  }
  //创建大小王
  const smallJoker = card("SJoker", 'SJoker', 'None');
  const largeJoker = card("LJoker", 'LJoker', 'None');
  deck_cards.push(smallJoker);
  deck_cards.push(largeJoker);
}

//洗牌
function shuffle(deck_cards) {
  if (54 == 54) { //todo
    //const random = randomInt();
    let list = [];
    deck_cards.forEach(function (item) {
      list.insert(randomInt(list.length + 1), item);
    }, this);
    //清空deck_cards并重新赋值
    deck_cards.splice(0, deck_cards.length);
    list.forEach(function (item) {
      deck_cards.push(item);
    }, this);
    //清空临时变量
    list.splice(0, list.length);
  }
}

//发牌
function deal(players, deck_cards, bottom_cards) {
  if (deck_cards.length < cards) {
    logger.fatal("牌数不够");
  }
  //开始发牌
  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < max_player; j++) {
      var card = getCard(deck_cards);
      players.get(j).play_cards.push(card);
    }
  }

  //发底牌
  for (let i = 0; i < 3; i++) {
    bottom_cards.push(getCard(deck_cards));//(CharacterType.Desk);
  }
}

//通知客户端
function notice_client(players) {
  players.keySet().forEach(function (key) {
    let player = players.get(key);
    if (player && player.socket) {
      player.socket.emit('sendcards', JSON.stringify(player.play_cards));
    }
  }, this);
}

//获取纸牌
function getCard(deck_cards) {
  if (deck_cards.length > 0) {
    return deck_cards.pop();
  }

}
exports.room = Room;
