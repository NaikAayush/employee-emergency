import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor() {}

  connectSocket(url: string, deserializer: any = null) {
    if (deserializer) {
      return webSocket({
        url: environment.wsEndpoint + url,
        deserializer: deserializer,
      });
    } else {
      return webSocket(environment.wsEndpoint + url);
    }
  }

  sendMessage(subject: WebSocketSubject<any>, msg) {
    subject.next(msg);
  }
}
