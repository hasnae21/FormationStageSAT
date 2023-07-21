import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }


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

    // Http Interceptors
    const headersApp = new HttpHeaders({
      'content-type' : 'application/json' ,
      'authentication-token': '12345678910'
    });
    const paramsApp = new HttpParams()
    .set('NumPage', '25')
    .set('SizePage', '100');

    return this.http.get('https://jsonplaceholder.typicode.com/users' , {headers: headersApp , params: paramsApp});

    /*
    const users = [
      {userId: 10, userName: 'Youtube'},
      {userId: 20, userName: 'Instagram'},
      {userId: 30, userName: 'Twitter'},
      {userId: 40, userName: 'Facebook'}
    ];
    return users;
    */
  }
}
