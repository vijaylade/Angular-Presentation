import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private api = environment.apiUrl;

  loginWithQueryParams(username: string, password: string) {
    const url = `${this.api}/User/LogIn`;

    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(url, {}, { params });
  }
}
