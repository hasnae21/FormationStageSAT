import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  deleteUser(id: any): Observable<object>{

    // Http Interceptors
    const headersApp3 = new HttpHeaders({
      'authenticationToken': '543210',
      'expiryToken': '15'
    });
    const paramsApp3 = new HttpParams()
    .set('userRole', 'admin');

    return this.http.delete('https://jsonplaceholder.typicode.com/users/' +id, {headers: headersApp3, params: paramsApp3 });
  }

  updateUser(){

    // Http Interceptors
    const headersApp2 = new HttpHeaders({
      'content-type': 'application/json',
      'authentication-token-key': '9876543210',
      'userId': 'testinguser'
    });
    const paramsApp2 = new HttpParams()
    .set('source', 'googleAnalytics');

    const putBody = {
      name: 'Hasnae testing put methode' ,
      userId:1
    };

    return this.http.put('https://jsonplaceholder.typicode.com/users/1', putBody, {headers: headersApp2 , params: paramsApp2 });
  }

  addUsers(body: any){

    // Http Interceptors
    const headersApp1 = new HttpHeaders({
      'authentication-token-key': '9876543210'
    });
    const paramsApp1 = new HttpParams()
    .set('userRole', 'admin');

    return this.http.post('https://jsonplaceholder.typicode.com/users', body, {headers: headersApp1 , params: paramsApp1 });
  }

  getUsers(){
/*
    // Http Interceptors
    const headersApp = new HttpHeaders({
      'content-type' : 'application/json' ,
      'authentication-token': '12345678910'
    });

    */
    const paramsApp = new HttpParams()
    .set('NumPage', '25')
    .set('SizePage', '100');

    return this.http.get('https://jsonplaceholder.typicode.com/users' , {params: paramsApp});
  }
}
