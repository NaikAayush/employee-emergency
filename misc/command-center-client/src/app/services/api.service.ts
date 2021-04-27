import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  async get(route: String, params?: Record<string, string>) {
    let url = `${environment.apiUrl}${route}`;

    if (params) {
      url += '?' + new URLSearchParams(params);
    }

    return await this.http.get<Message>(url).toPromise();
  }

  async post(route: String, data: any) {
    return await this.http
      .post(`${environment.apiUrl}${route}`, data, { responseType: 'json' })
      .toPromise();
  }
}
