import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private _HttpClient:HttpClient) { }

  create(tripData:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:8080/admin/create',tripData)

  }

  getAll():Observable<any>
  {
    return this._HttpClient.get('http://localhost:8080/admin/getAllTrips')

  }


  updateTrip(tripData:any, id:number):Observable<any>
  {
    return this._HttpClient.put('http://localhost:8080/admin/updateTrip/'+id,tripData)

  }

  deleteTrip(id:number):Observable<any>
  {
    return this._HttpClient.delete('http://localhost:8080/admin/deleteTrip/'+id)

  }

  


}
