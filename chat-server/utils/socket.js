'use strict';

const path = require('path');
const helper = require('./helper');

class Socket{

	constructor(socket){
		this.io = socket;
	}
	
	socketEvents(){

		this.io.on('connection', (socket) => {

			/**
			* get the user's Chat list
			*/
			socket.on('chat-list', (data) => {

				let chatListResponse = {};

				if (data.userId == '') {

					chatListResponse.error = true;
					chatListResponse.message = `User does not exits.`;
					
					this.io.emit('chat-list-response',chatListResponse);

				}else{

					helper.getUserInfo( data.userId,(err, UserInfoResponse)=>{
						
						delete UserInfoResponse.password;

						helper.getChatList( socket.id,(err, response)=>{
						
							this.io.to(socket.id).emit('chat-list-response',{
								error : false ,
								singleUser : false ,
								chatList : response
							});

							socket.broadcast.emit('chat-list-response',{
								error : false ,
								singleUser : true ,
								chatList : UserInfoResponse
							});

						});
					});
				}
		    });

			/**
			* send the messages to the user
			*/
			socket.on('add-message', (data) => {
				
				if (data.message === '') {
					
					this.io.to(socket.id).emit(`add-message-response`,`Message cant be empty`); 

				}else if(data.fromUserId === ''){
					
					this.io.to(socket.id).emit(`add-message-response`,`Unexpected error, Login again.`); 

				}else if(data.toUserId === ''){
					
					this.io.to(socket.id).emit(`add-message-response`,`Select a user to chat.`); 

				}else{
					
					let toSocketId;
					let fromSocketId;
					delete data.toSocketId;
		        	data.timestamp = Math.floor(new Date() / 1000);
					helper.getUserInfo( data.touserId,(err, Response)=>{
						data.toSocketId=Response.socketId
						toSocketId= data.toSocketId;
					});
					helper.getUserInfo( data.fromUserId,(err, Response)=>{
						data.fromSocketId=Response.socketId
						fromSocketId= data.fromSocketId;
					});
					console.log(data);
					delete data.toSocketId;
					helper.insertMessages(data,( error , response)=>{
						this.io.to(toSocketId).emit(`add-message-response`,data); 
					});
				}				
		    });


			/**
			* Logout the user
			*/
			socket.on('logout',(data)=>{

				const userId = data.userId;
				
				helper.logout(userId , false, (error, result)=>{

					this.io.to(socket.id).emit('logout-response',{
						error : false
					});

					socket.broadcast.emit('chat-list-response',{
						error : false ,
						userDisconnected : true ,
						socketId : socket.id
					});
				});	
		    });


			/**
			* sending the disconnected user to all socket users. 
			*/
			socket.on('disconnect',()=>{
				console.log("disconnected :::::"+socket.id);
				socket.broadcast.emit('chat-list-response',{
					error : false ,
					userDisconnected : true ,
					socketId : socket.id
				});
		    });

		});

	}
	
	socketConfig(){

		this.io.use(function(socket, next) {
			console.log(socket.request._query['userId']+" :::::"+socket.id);
			let userID = socket.request._query['userId'];
          	let userSocketId = socket.id;
          	const data = {
          		id : userID,
          		value : {
          			$set :{
          				socketId : userSocketId,
          				online : 'Y'
          			}
          		}
          	}

          	helper.addSocketId( data ,(error,response)=>{
          		// socket id updated.
          	});
          	next();
        });

        this.socketEvents();
	}
}
module.exports = Socket;