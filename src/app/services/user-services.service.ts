import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '@app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  baseURL = 'https://dummyapi.io/data/v1';
  constructor(private http: HttpClient) {}

  public get(): Observable<UserResponse>{
  let headers = new HttpHeaders({'app-id': '64ed062e4340d229095be2de'});
  return this.http
    .get<UserResponse>(`${this.baseURL}/user`, { headers });
}
}
