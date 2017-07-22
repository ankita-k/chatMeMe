import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ChatPage } from "../chat/chat";
import { ListPage } from "../list/list";
import { Http } from '@angular/http';
import { LoginProvider } from "../../providers/login/login";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoginProvider]
})
export class HomePage {

    password:string
    username:string;
    id:string;
  

  constructor(private navCtrl: NavController, private loginProvider: LoginProvider,private navParams:NavParams) {}

  
  // nextpage(){
  //   if(this.email=="subham", this.password=="subham"){
  //      this.navCtrl.push(ListPage)
  //   }
  //  else{
  //      console.log('enter right password');
  //    }
  // }

//   
submit(value){
  // const value={
  //   email = this.email,
  //   password=this.password
  // }
  this.loginProvider.checkValidation({
    'username':this.username,
    'password':this.password
  },(error,data)=>{
    if(error){
    throw error;
  }
  else
  {
    if(!data.error){
      debugger;
    this.navCtrl.push(ListPage,{id:data.userId});
  }
  else{
    alert('Error');
  }
  }
 
})
}
}



