let config ={
		SERVER_ID:"001",
		
		//暴露给大厅服的HTTP端口号
		// HTTP_PORT:3000,
		//HTTP TICK的间隔时间，用于向大厅服汇报情况
		HTTP_TICK_TIME:5000,
		//大厅服IP
		// HALL_IP:LOCAL_IP,
		// FOR_HALL_IP:LOCAL_IP,
		//大厅服端口
		// HALL_PORT:HALL_ROOM_PORT,
		// //与大厅服协商好的通信加密KEY
		// ROOM_PRI_KEY:ROOM_PRI_KEY,
		
		// //暴露给客户端的接口
		// CLIENT_IP:HALL_IP,
		CLIENT_PORT:3000,
	};
//开启HTTP服务
let socket_service = require("./socket_service");
socket_service.start(config);