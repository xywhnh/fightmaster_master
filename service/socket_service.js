const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const root_path = path.resolve(__dirname, '..');
const platform = require(root_path + '\\module\\platform.js');
const room = require(root_path + '\\module\\room.js');
const player_service = require(root_path + '\\module\\player.js');
//const platform = new platform_service.platform();
exports.start = function (config, mgr) {


  //config = require(root_path + '/config.js');
  app.get('/', function (req, res) {
    console.log(req);
    //res.sendFile(root_path + '/client_demo.html');
  });

  io.on('connection', function (socket) {
    console.log('conection success');
    socket.emit("create_state", true);
    // socket.on('start', function (data) {
    //   console.log('client said: ' + data);
    //   socket.emit('client','hello client!')
    // })
    socket.on('login', function (data) {
      //doLogin;
      socket.emit("login_state", true);
    });


    socket.on('create_room', function (data) {
      platform.create_room();
      //doCreate;
      socket.emit("create_state", true);
    });

    socket.on('destory_room', function (data) {
      //doCreate;
      socket.emit("delete_state", true);
    });

    socket.on('exit_room', function (data) {
      //doCreate;
      socket.emit("exit_state", true);
    });

    socket.on('join_room', function (data) {
      //doJoin;
      socket.emit("join_state", true);
    });


    socket.on('seat', function (data) {
      //坐下
      socket.emit("seat_state", true);
    });

    socket.on('start', function (data) {
      //const player_service = require(root_path + '\\module\\player.js');
      let player1 = new player_service.player(0, 'player1');
      let player2 = new player_service.player(1, 'player2');
      let player3 = new player_service.player(2, 'player3');

      player1.socket = socket;
      //开始游戏
      let p = new platform.Platform();
      let room = p.create_room(player1);
      room.players.put(0, player1);//初始化玩家
      room.players.put(1, player2);//初始化玩家
      room.players.put(2, player3);//初始化玩家
      room.room_start();
    });

    socket.on('play', function (data) {
      //出牌
      socket.emit("chupai", true);
    });

    socket.on('chat message', function (msg) {
      io.emit('chat message', msg);
    });


  });

  http.listen(config.net_config.PORT, function () {
    console.log('listening on *:' + config.net_config.PORT);
  });
};
