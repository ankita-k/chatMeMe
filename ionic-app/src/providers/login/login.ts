import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  //private url='http://localhost:3000';

  agents=[];

  constructor(public http: Http) {
    // console.log('Hello LoginProvider Provider');
  }

  // loginfun(pdata) 
  // {
  //       var link = 'http://localhost:3000/api/agent/login';
  //       var data = JSON.stringify({ email: pdata.email, password: pdata.password });
        
  //       this.http.post(link, data)
  //       .subscribe(data => {
  //           console.log('success');
  //       }, error => {
  //           console.log("Oooops!");
  //       });

  // }

 checkValidation(value,callback){
   var headers=new Headers();
   headers.append('Content-Type','application/json');
   console.log(value.username + value.password);
   return this.http.post('http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080/login',value,{headers:headers}).map(response=>response.json())
   .subscribe(data=>{
     callback(false,data);
   },
   error=>{
     callback(true,'Error');
   });
 }

}
