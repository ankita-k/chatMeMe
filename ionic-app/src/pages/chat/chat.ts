import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';
import { SocketProvider } from '../../providers/socket/socket';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
    id: string;
    chat_input: string;
   chats = [];
    socket: any;

private selectedUserId = null;
	private selectedSocketId = null;
	private selectedUserName = null;	

    private username = null;
	private userId = null;
	private socketId = null;
	private chatListUsers = [];
	private message = '';
	private messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private socketProvider:SocketProvider) {

     this.selectedSocketId = this.navParams.get('toSocketId');
     this.selectedUserId = this.navParams.get('toUserId');
     this.id = this.navParams.get('userId');
console.log("chat ts || constructor end user  id:-" + this.selectedUserId + "end user socketid" +  this.selectedSocketId + " user id " + this.id);
      this.socketProvider.connectSocket(this.id);
      console.log("list || constructor trace id:-" + this.id);
      this.socketProvider.receiveMessages().subscribe(response => {
			    		if(this.selectedUserId && this.selectedUserId == response.fromUserId) {
			    			this.messages.push(response);
			    			setTimeout( () =>{
			    					document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
			    			},100);
			    		}
			    	});;

      

  }
isUserSelected(id:string):boolean{
		if(!this.selectedUserId) {
			return false;
		}
		return this.selectedUserId ===  id ? true : false;
	}
  alignMessage(id){
		return this.id ===  id ? false : true;    
  
  }
  
  sendMessage(event) 
  {
 
			if(this.message === '' || this.message === null) {
				alert(`Message can't be empty.`);
			}else{

				if (this.message === '') {
					alert(`Message can't be empty.`);
				}else if(this.id === ''){
					this.navCtrl.push('/');					
				}else if(this.selectedUserId === ''){
					alert(`Select a user to chat.`);
				}else{
          debugger;
					const data = {
						fromUserId : this.id,
						message : (this.message).trim(),
						toUserId : this.selectedUserId,
						// toSocketId : this.selectedSocketId,
						// fromSocketId : this.socketId
					}
					this.messages.push(data);

					setTimeout( () =>{
	    					document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
	    			},100);
					
					/* 
					* calling method to send the messages
					*/
					this.message = null;
					this.socketProvider.sendMessage(data);
				}
			}
		
	} 
} 




