import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { WebSocketSubject } from 'rxjs/webSocket';
import { WebsocketService } from 'src/app/employee/services/websocket/websocket.service';
import { ChatService } from './chat-service/chat.service';

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.page.html',
  styleUrls: ['./employee-chat.page.scss'],
})
export class EmployeeChatPage implements OnInit {
  @ViewChild('msgInput') msgInput: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;

  private ertCollection: AngularFirestoreCollection;
  private ertUids: string[];
  private ertLocations: any[];
  private ertSubjects: WebSocketSubject<any>[];

  constructor(
    public chat: ChatService,
    private firestore: AngularFirestore,
    private websocket: WebsocketService
  ) {}

  async ngOnInit() {
    this.ertCollection = this.firestore.collection('users', (ref) =>
      ref.where('ert', '==', true)
    );

    let ertDoc = await this.ertCollection.get().toPromise();

    this.ertUids = [];
    this.ertLocations = Array(ertDoc.docs.length).fill({x: 0, y: 0, name: ""});
    for (let i = 0; i < ertDoc.docs.length; ++i) {
      this.ertUids.push(ertDoc.docs[i].data().uid);
    }

    console.log(this.ertUids);

    for (let i = 0; i < this.ertUids.length; ++i) {
      const ertUid = this.ertUids[i];
      this.websocket
        .connectSocket('listen?id=' + ertUid, (e) => e.data)
        .subscribe({
          next: (data: string) => {
            try {
              let data2 = JSON.parse(data);
              console.log(data2);
              this.ertLocations[i] = data2;
              console.log(this.ertLocations);
              console.log(this.ertUids);
            } catch {
              console.log('could not json parse');
            }
          },
          error: (err) => console.log('JSON aaaaaa', err),
        });
    }
  }

  public handleSubmitClick(senderUid_: string, receiverUid_: string) {
    console.log('submit clicked', senderUid_, receiverUid_);

    this.chat.init(senderUid_, receiverUid_, senderUid_);

    this.chat.messageObs.subscribe(async () => {
      console.log('Scrolling');
      // this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
      await new Promise((r) => setTimeout(r, 100));
      this.msgInput.nativeElement.scrollIntoView(false);
    });
  }

  sendChatMessage(message: string) {
    this.chat.sendMessage(message);
    this.messageInput.nativeElement.value = '';
  }
}
