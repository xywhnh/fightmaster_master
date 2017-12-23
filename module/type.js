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

//花色
exports.Suits = Object.freeze(
  {
    Club: 0,
    Diamond: 1,
    Heart: 2,//红桃
    Spade: 3,//方块
    None: 4
  });


//权重
exports.Weight = Object.freeze(
  {
    Three: 0,
    Four: 1,
    Five: 2,
    Six: 3,
    Seven: 4,
    Eight: 5,
    Nine: 6,
    Ten: 7,
    Jack: 8,
    Queen: 9,
    King: 10,
    One: 11,
    Two: 12,
    SJoker: 13,//小王
    LJoker: 14,//大王
  }
)



