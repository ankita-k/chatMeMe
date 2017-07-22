import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
  providers: [SocketService, HttpService, ChatService]
})
export class ChattingComponent implements OnInit {

  //variable for agents
  selectedAgentId: any;
  selectedAgentSocketId: any;

  //variable for customer
  private id = null;
  private socketId = null;
  private userMessages = [];
  private agentMessages = [];
  private userMessage = "";
  private agentMessage = "";

  today: number = Date.now();

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

      this.chatService.userSessionCheck(this.id, (error, response) => {
        if (error) {
          this.router.navigate(['/']); /* Home page redirection */
        }
        else {
          this.socketService.receiveMessages().subscribe(data => {
            this.agentMessages.push(data);
          });

        }
      });
    }

    //for message start


    //  this.connection = this.chatService.getMessages().subscribe(data => {
    //   this.messages.push(data);
    // })

    // this.connection = this.chatService.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // })

  }

  sendMessage() {
    if (this.userMessage === '' || this.userMessage === null) {
      alert(`Message can't be empty.`);
    }
    else {
      const data = {
        //customer id and socket id
        // fromUserId : this.userId,
        // fromSocketId : this.socketId,
        // //agent id and socket id
        // toAgentId : this.selectedAgentId,
        // toAgentSocketId : this.selectedAgentSocketId,
        userMessage: (this.userMessage).trim()
      }
      this.userMessages.push(data);
      this.userMessage = null;
      this.socketService.sendMessage(data);
    }
  }

}
