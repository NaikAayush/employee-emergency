import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

// TODO:
//  1. demo with fixed sender and receiver id
//  2. get nearest ERT automatically
//  3. chat with command center

class Message {
  content: string;
  sender: string;
  senderId: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public senderUid: string;
  public receiverUid: string;
  public senderName: string;
  public messages: Message[];

  private messagesRef: AngularFireList<Message>;
  private messageObs: Observable<Message[]>;

  constructor(
    public firestore: AngularFirestore,
    public db: AngularFireDatabase
  ) {}

  ngOnInit() { }

  public handleSubmitClick(senderUid_: string, receiverUid_: string) {
    console.log('submit clicked', senderUid_, receiverUid_);
    this.senderUid = senderUid_;
    this.receiverUid = receiverUid_;
    this.senderName = senderUid_;

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

    // this.messageObs.subscribe({
    //   next(msgs) {
    //     console.log(msgs);
    //     this.messages = msgs;
    //   },
    // });
    // this.messagesRef.push({ content: 'bye' });
  }

  public sendMessage(inp: string) {
    this.messagesRef.push({
      content: inp,
      sender: this.senderName,
      senderId: this.senderUid
    })
  }
}
