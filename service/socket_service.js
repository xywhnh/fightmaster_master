const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const root_path = path.resolve(__dirname, '..');
const platform = require(root_path + 'module/platform.js');
const room = require(root_path + 'module/room.js');

exports.start = function (config, mgr) {

  //config = require(root_path + '/config.js');
  app.get('/', function (req, res) {
    res.sendFile(root_path + '/client_demo.html');
  });

  io.on('connection', function (socket) {
    socket.on('login', function (data) {
      //doLogin;
      socket.emit("login_state", true);
    });


    socket.on('create_room', function (data) {
      //判断元宝是否够



      //doCreate;
      socket.emit("create_state", true);
    });

    socket.on('delete_room', function (data) {
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
      //开始游戏
      socket.emit("start_state", true);

      //给房间内每个人分别发牌


    });

    socket.on('chupai', function (data) {
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
