import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  //specify the socket url
  private url = 'http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080/';
  private socket;

  //connect the endUser to the socket
  connectSocket(userId:string){
  		this.socket = io(this.url,{ query: `userId=${userId}`});
  }

  // emitting sendMessage event
  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("Message sent successfully");
  }

  //emitting message-response event
  receiveMessages() {
    let observable = new Observable(observer => {
      // this.socket = io(this.url);
      console.log('received');
      this.socket.on('add-message-response', (data) => {
         console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();

      }
    })
    return observable;
  }
}
