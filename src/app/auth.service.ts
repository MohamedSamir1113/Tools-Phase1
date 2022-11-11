import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signup(formData:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:8080/admin/signup',formData)

  }
}