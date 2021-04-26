import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor() {}

  connectSocket(url) {
    return webSocket(environment.wsEndpoint + url);
  }

  sendMessage(subject, msg) {
    subject.next(msg);
  }
}
