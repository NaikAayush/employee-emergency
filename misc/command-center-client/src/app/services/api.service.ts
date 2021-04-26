import {HttpClient} from '@angular/common/http';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    async get(route: String) {
        return await this.http
            .get<Message>(`${environment.apiUrl}${route}`)
            .toPromise();
    }

    async post(route: String, data: any) {
        return await this.http.post(`${environment.apiUrl}${route}`, data, {responseType: "json"}).toPromise();
    }
}
