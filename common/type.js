let map = require('./map.js');
//出牌类型
exports.CardsType = Object.freeze({
  //未知类型
  None: 0,
  //王炸
  JokerBoom: 1,
  //炸弹
  Boom: 2,
  //三个不带
  OnlyThree: 3,
  //三个带一
  ThreeAndOne: 4,
  //三个带二
  ThreeAndTwo: 5,
  //顺子 五张或更多的连续单牌
  Straight: 6,
  //双顺 三对或更多的连续对牌
  DoubleStraight: 7,
  //三顺 二个或更多的连续三张牌
  TripleStraight: 8,
  //对子
  Double: 9,
  //单个
  Single: 10
});

exports.Suits =
  map.Map.init([
    { 'value': 'Club', 'key': 0 },
    { 'value': 'Diamond', 'key': 1 },
    { 'value': 'Heart', 'key': 2 },
    { 'value': 'Spade', 'key': 3 },
    { 'value': 'None', 'key': 4 }
  ]);



exports.Weight =
  map.Map.init([
    { 'value': 'Three', 'key': 0 },
    { 'value': 'Four', 'key': 1 },
    { 'value': 'Five', 'key': 2 },
    { 'value': 'Six', 'key': 3 },
    { 'value': 'Seven', 'key': 4 },
    { 'value': 'Eight', 'key': 5 },
    { 'value': 'Nine', 'key': 6 },
    { 'value': 'Ten', 'key': 7 },
    { 'value': 'Jack', 'key': 8 },
    { 'value': 'Queen', 'key': 9 },
    { 'value': 'King', 'key': 10 },
    { 'value': 'One', 'key': 11 },
    { 'value': 'Two', 'key': 12 },
    { 'value': 'SJoker', 'key': 13 },
    { 'value': 'LJoker', 'key': 14 }
  ]);


// //花色
// exports.Suits = Object.freeze(
//   {
//     Club: 0,//梅花
//     Diamond: 1,//方块
//     Heart: 2,//红桃
//     Spade: 3,//黑桃
//     None: 4
//   });


// //权重
// exports.Weight = Object.freeze(
//   {
//     Three: 0,
//     Four: 1,
//     Five: 2,
//     Six: 3,
//     Seven: 4,
//     Eight: 5,
//     Nine: 6,
//     Ten: 7,
//     Jack: 8,
//     Queen: 9,
//     King: 10,
//     One: 11,
//     Two: 12,
//     SJoker: 13,//小王
//     LJoker: 14,//大王
//   }
//)



