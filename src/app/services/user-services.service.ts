import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedResponse, Pagination } from '@app/models/pagination';
import { User } from '@app/models/user';
import { Observable, map, take } from 'rxjs';
import { appConfig } from '../../environments/appConfig'

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  baseURL = 'https://dummyapi.io/data/v1';
  pagination = {} as Pagination;
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'app-id': `${appConfig.appId}`
  })

  options = {
    'headers': this.headers
  }

  public getUsers(
    page?: number,
    limit?: number
  ): Observable<PaginatedResponse<User[]>> {
    let params = new HttpParams();
    const paginatedResponse: PaginatedResponse<User[]> = new PaginatedResponse<
      User[]
    >();

    if (page !== null && limit !== null) {
      params = params.append('page', page.toString());
      params = params.append('limit', limit.toString());
    }

    return this.http
      .get<User[]>(`${this.baseURL}/user`, {
        observe: 'response',
        ...this.options,
        params,
      })
      .pipe(
        take(1),
        map((res) => {
          paginatedResponse.data = res.body;
          return paginatedResponse;
        })
      );
  }

  public getUser(userID: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/user/${userID}`, { ...this.options });
  }
}
