import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private _HttpClient:HttpClient) { }

  create(stationData:any):Observable<any>
  {
    return this._HttpClient.post('http://localhost:8080/station/create',stationData)

  }

  getAllStations():Observable<any>
  {
    return this._HttpClient.get('http://localhost:8080/station/getall')

  }

  deleteStation(id:number):Observable<any>
  {
    return this._HttpClient.delete('http://localhost:8080/station/delete/'+id)

  }
  
}
