import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

class Message {
  content: string;
  sender: string;
  senderId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private senderUid: string;
  private receiverUid: string;
  public senderName: string;

  private messagesRef: AngularFireList<Message>;
  public messageObs: Observable<Message[]>;

  constructor(private db: AngularFireDatabase) { }

  init(senderUid_: string, receiverUid_: string, senderName_: string) {
    this.senderUid = senderUid_;
    this.receiverUid = receiverUid_;
    this.senderName = senderName_;

    if (this.senderUid < this.receiverUid) {
    this.messagesRef = this.db.list(
      `messages/${this.senderUid}_${this.receiverUid}`
    );
    } else {
    this.messagesRef = this.db.list(
      `messages/${this.receiverUid}_${this.senderUid}`
    );
    }
    this.messageObs = this.messagesRef.valueChanges();
  }

  public sendMessage(inp: string) {
    this.messagesRef.push({
      content: inp,
      sender: this.senderName,
      senderId: this.senderUid
    })
  }
}
