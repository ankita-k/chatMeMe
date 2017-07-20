import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class HttpService {
    //provide the url
    private url = 'http://localhost:9000';

    //request headers
    private headerOptions = new RequestOptions({
        headers : new Headers({ 'Content-Type' : 'application/json;charset=UTF-8' })
    });

    constructor( private http:Http) { }

    //add customer information to the server
    public addCustomerData(params){
  		return this.http.post(`${this.url}`,JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
      }
        
      //retrive the customerId
      public getCustomerId(){
          return this.http.get(`${this.url}`)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
      }

    public registerUser(params){
  		return this.http.post(`${this.url}`,JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
  	}

    public getMessages(params){
		return this.http.post(`${this.url}`,JSON.stringify(params),this.headerOptions)
	    	.map( (response:Response) => response.json())
	      	.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
	}
}