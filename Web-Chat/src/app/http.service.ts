import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class HttpService {
    //provide the url
    private url = 'http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080/';

    //request headers
    private headerOptions = new RequestOptions({
        headers : new Headers({ 'Content-Type' : 'application/json;charset=UTF-8' })
    });

    constructor( private http:Http) { }

    //add customer information to the server
    public addCustomerData(params){
  		return this.http.post(`${this.url}registerUser`,JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
      }

     public userSessionCheck(params){
        return this.http.post(`${this.url}userSessionCheck`,JSON.stringify(params),this.headerOptions)
            .map( (response:Response) => response.json())
            .catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
    }

    public getMessages(params){
		return this.http.post(`${this.url}`,JSON.stringify(params),this.headerOptions)
	    	.map( (response:Response) => response.json())
	      	.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
	}
}