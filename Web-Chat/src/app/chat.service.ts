import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ChatService {

    userDetails=[];

    constructor(private httpService : HttpService) { }

    //method to add customerData to server
    public addCustomerData(params ,callback):any{
        this.httpService.addCustomerData(params).subscribe(data=>{
                  callback(false,data);
        },error=>{
            callback(true,'HTTP fail.');
        });
    }

 
	// method to get the messages between two users
    public getMessages(params ,callback):any{
        this.httpService.getMessages(params).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }

    //user session check
    public userSessionCheck(userId , callback):any{
    	this.httpService.userSessionCheck({userId : userId}).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }


}