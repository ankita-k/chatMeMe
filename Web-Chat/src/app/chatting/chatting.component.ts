import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
  providers: [SocketService,HttpService,ChatService]
})
export class ChattingComponent implements OnInit {

  private userId=null;
  private socketId = null;
  private messages=[];
  private message="";

  constructor(private chatService: ChatService) { }

  // sendMessage() {
  //   this.chatService.sendMessage(this.name,this.message);
  //   this.message = '';
  // }

  ngOnInit() {

    //  this.connection = this.chatService.getMessages().subscribe(data => {
    //   this.messages.push(data);
    // })

    // this.connection = this.chatService.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // })

  }

}
