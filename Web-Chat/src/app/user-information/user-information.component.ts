import { Component, OnInit } from '@angular/core';
import { ChatService } from './../chat.service';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  providers:[ChatService,HttpService]
})
export class UserInformationComponent implements OnInit {

  customer_name:string;
  email:string;
  phone_number:string;
  departments=[{name:'Web Design'},
              {name:'Android Application'},
              {name:'Jquery'},
              {name:'Javascript'}];

  constructor(private chatService: ChatService, private router :Router) { }

  submitting(){
    const value={
      siteId: '5974846c0b56337e3043f513',
      username: this.customer_name,
      email: this.email,
      phone: this.phone_number,
      role:'User'
    }
    this.chatService.addCustomerData(value,(error,data)=>{
      if(error){
        throw error;
      }
      else{
        if(!data.error) 
          {
            this.router.navigate(['/chat/'+data.userId]);
            }else
                {
                  alert(`Registration failure.`);
                  }
          }
      })
  }

  ngOnInit() {
  }

}
