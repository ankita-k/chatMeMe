import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ChatService {
    constructor(private httpService : HttpService) { }

    //method to add customerData to server
    public addCustomerData(params ,callback):any{
        this.httpService.addCustomerData(params).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }

    //get customerId from server
    public getCustomerId(){
        this.httpService.getCustomerId();
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


}