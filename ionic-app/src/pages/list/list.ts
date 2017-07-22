import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';
import { ChatPage } from "../chat/chat";
/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [SocketProvider]
})

export class ListPage {
  private  selectedUserId: null;
  private username = null;
  private userId = null;
  private socketId = null;
  private chatListUsers = [];
  private message = '';
  private messages = [];

	private selectedSocketId = null;
	private selectedUserName = null;	

  id: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private socketProvider: SocketProvider)
   {
    this.id = this.navParams.get('id');

    this.socketProvider.connectSocket(this.id);
    console.log("list || constructor trace id:-" + this.id);

    this.socketProvider.getChatList(this.id).subscribe(response =>
     {
      if (!response.error)
       {
        if (response.singleUser) 
        {
          /* 
          * Removing duplicate user from chat list array.
          */
          if (this.chatListUsers.length > 0) 
          {
            this.chatListUsers = this.chatListUsers.filter(function (obj) 
            {
              return obj._id !== response.chatList._id;
            });
          }

          /* 
          * Adding new online user into chat list array
          */
          this.chatListUsers.push(response.chatList);

        }
        else if (response.userDisconnected) 
        {
          this.chatListUsers = this.chatListUsers.filter(function (obj)
           {
            return obj.socketId !== response.socketId;
          });
        }
        else
         {
          /* 
          * Updating entire chatlist if user logs in.
          */
          this.chatListUsers = response.chatList;
          console.log("chatlist length:-" + this.chatListUsers.length);
        }
      }
      else 
      {
        alert(`Chat list failure.`);
      }
    });

    	/* 
					* subscribing for messages statrts
					*/
			    	this.socketProvider.receiveMessages().subscribe(response =>
             {
			    		if(this.selectedUserId && this.selectedUserId == response.fromUserId)
               {
			    			this.messages.push(response);
			    			setTimeout( () =>
                {
			    					document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
			    			},100);
			    		}
			    	});
  }

/* 
	* Method to select the user from the Chat list starts
	*/
	selectedUser(user):void
  {
		this.selectedUserId = user._id;
    console.log("list || selectedUser end user  id:-" + user._id + "end user socketid" +  user.socketId);
		this.selectedSocketId = user.socketId;
		this.selectedUserName = user.username;
    this.navCtrl.push(ChatPage,{userId:this.id, toUserId:this.selectedUserId, toSocketId:this.selectedSocketId});
    /* 
		* calling method to get the messages
		*/

   }
   
}