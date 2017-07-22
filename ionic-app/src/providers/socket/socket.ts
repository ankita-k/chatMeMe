import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the SocketProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SocketProvider {
  socket: any;


  private BASE_URL = 'http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080';

  constructor(public http: Http) { }
  /* 
* Method to connect the users to socket
*/
  connectSocket(userId: string)
   {
    console.log("socket || connectSocket trace id:-" + userId);
    this.socket = io(this.BASE_URL, { query: `userId=${userId}` });
  }


  /* 
* Method to emit the add-messages event.
*/
  sendMessage(message: any): void
   {
      console.log("socket || sendMessage trace id:-" + message);
    this.socket.emit('add-message', message);
    
  }

  receiveMessages(): any
   {
    //console.log("socket || receiveMessages trace id:-" + );
    let observable = new Observable(observer =>
     {
      this.socket.on('add-message-response', (data) => 
      {
        debugger;
        observer.next(data);
      });

      return () =>
       {
        this.socket.disconnect();
      };
    });
    return observable;
  }


  /* 
* Method to receive chat-list-response event.
*/
  getChatList(userId: string): any
   {
    console.log("socket || getChatList trace id:-" + userId);
    this.socket.emit('chat-list', { userId: userId });

    let observable = new Observable(observer => {
      this.socket.on('chat-list-response', (data) =>
       {
        observer.next(data);
      });

      return () =>
       {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
