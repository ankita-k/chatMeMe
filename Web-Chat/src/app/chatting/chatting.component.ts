import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
  providers: [SocketService, HttpService, ChatService]
})
export class ChattingComponent implements OnInit {

  //define agent status
  agentStatusRecv = {
    agentStatus: true
  };

  //variable for agents
  agentInfo: any;
  selectedAgentSocketId: any;

  //variable for customer
  private id = null;
  private socketId = null;
  private messages = [];
  private message = "";

  timenow:any=moment().format('LTS');

  constructor(private chatService: ChatService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    //getting userId from url
    this.id = this.route.snapshot.params['userId'];
    //check validation
    if (this.id === '' || typeof this.id == 'undefined') {
      this.router.navigate(['/']);
    }
    else {

      //making socket connection by passing userId
      this.socketService.connectSocket(this.id);
      this.socketService.getAgentStatus(this.id);
      this.socketService.receiveAgentStatus().subscribe(data => {
        console.log(data);
        this.agentStatusRecv = JSON.parse(JSON.stringify(data));
      });
      this.chatService.userSessionCheck(this.id, (error, response) => {
        if (error) {
          this.router.navigate(['/']);
        }
        else {
          this.socketService.receiveMessages().subscribe(data => {
            // console.log(data);
            this.agentInfo = data;
            this.messages.push(data);
          });

        }
      });
    }

  }

  alignMessage(id) {
    return this.id === id ? false : true;
  }

  sendMessage(event) {
    if (event.keyCode === 13) {
      if (this.message === '' || this.message === null) {
        alert(`Message can't be empty.`);
      }
      else {
        const data = {
          //customer id and socket id
          fromUserId: this.id,
          // fromSocketId : this.socketId,
          // //agent id and socket id
          toUserId: this.agentInfo.fromUserId,
          // toAgentSocketId : this.selectedAgentSocketId,
          message: (this.message).trim()
        }
        this.messages.push(data);
        this.message = null;
        this.socketService.sendMessage(data);
      }
    }
  }

}
