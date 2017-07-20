import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    password: "subham";
    username: "subham";

  constructor(public navCtrl: NavController) {

  }
  nextpage(){
    if(this.username=="subham", this.password=="subham"){
       this.navCtrl.push(ChatPage)
    }
   else{
       console.log('enter right password');
     }
  }

}
