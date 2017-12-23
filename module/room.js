//var db = require('../utils/db');
const randomInt = require('random-int');
const log4js = require('log4js');
const path = require('path');
const map = require("../common/map.js");
const player = require('./player.js');
const type = require('./type.js');
const root_path = path.resolve(__dirname, '..');
const config = require(root_path + '/config.js');
const max_player = 3;
const cards = 54;

let creator = null;
let players = [];
let deck_cards = [];//存放一付完整的牌
let bottom_cards = [];//存放底牌

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
var logger = log4js.getLogger();
logger.level = 'debug';

function room() {
  this.room_no = null;//房号
  this.players = new map.Map();
  this.deck_cards = new map.Map();
  this.bottom_cards = new map.Map();
  this.join_room = join;
  this.leave_room = leave;
  this.create_deck = createDeck;
  this.shuffle = shuffle;
  this.deal = Deal;
}

function join(player, room) {
  if (players.length >= max_player) {
    return -1;//房间已满
  }
  this.players.push(player);
};
function leave(player, room) {
  //todo 判断不能离开的情况

  //todo 离开房间
};



//创建桌子里的一付牌
function createDeck() {
  //创建普通扑克
  for (color = 0; color < 4; color++) {
    for (value = 0; value < 13; value++) {
      const weight = new type.Weight();
      const color = new type.Suits();
      const name = s.ToString() + w.ToString();
      const card = new Card(name, weight, color, ctype);
      this.deck_cards.push(card);
    }
  }
  //创建大小王
  const smallJoker = new Card("SJoker", Weight.SJoker, Suits.None, ctype);
  const largeJoker = new Card("LJoker", Weight.LJoker, Suits.None, ctype);
  this.deck_cards.push(smallJoker);
  this.deck_cards.push(largeJoker);
}

//洗牌
function Shuffle() {
  if (CardsCount == 54) {
    const random = randomInt();
    let list = [];
    for (let item in this.deck_cards) {
      list.insert(randomIn(list.length + 1), item);
    }
    this.deck_cards.splice(0, this.deck_cards.length);
    for (let card in list) {
      this.deck_cards.push(card);
    }

    //清空临时变量
    list.splice(0, list.length);
  }
}


//发牌
function Deal() {
  if (this.deck_cards.length < cards) {
    logger.fatal("牌数不够");
  }
  //开始发牌
  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < max_player; j++) {
      players[j].play_cards.push(this.getCard())
    }
  }

  //发底牌
  for (let i = 0; i < 3; i++) {
    bottom_cards.push(this.getCard());//(CharacterType.Desk);
  }

  //通知客户端

}

function getCard() {
  if (deck_cards.length > 0) {
    return this.deck_cards.pop();
  }

}




function validate() {

}
