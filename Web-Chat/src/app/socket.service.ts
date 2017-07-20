import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  //specify the socket url
  private url = 'http://localhost:9000';
  private socket;

  //connect the endUser to the socket
  connectSocket(userId:string){
  		this.socket = io(this.url,{ query: `userId=${userId}`});
  }

  //emitting sendMessage event
  sendMessage(name,message) {
    this.socket.emit('input', {name,message});
    console.log("Message sent successfully");
  }

  //emitting getMessage event
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('inputnew', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();

      }
    })
    return observable;
  }
}
