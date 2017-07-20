import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client';

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
    chat_input: string;
   chats = [];
    socket: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.socket = io('http://localhost:3000');
    //this.socket = io('http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080');

      this.socket.on('message', (msg) =>
        {
      console.log("message", msg);
      this.chats.push(msg);
    });

  }
   send(msg) 
  {
        if(msg != '')
        {
            this.socket.emit('message', msg);
        }
        
        this.chat_input = '';

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatPage');
  }

}

