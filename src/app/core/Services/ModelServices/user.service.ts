import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private myClient:HttpClient) { }

private Url_DB="https://localhost:7248/api/Users";


public addUser(user:User){
  return this.myClient.post(this.Url_DB,user);
}
public LoginCheck(Password:string,Email:string)
{
return this.myClient.get(this.Url_DB+"/"+Password+","+Email)
}

public CheckEmails(Email:string)
{
return this.myClient.get(this.Url_DB+"/"+Email)
}
}
