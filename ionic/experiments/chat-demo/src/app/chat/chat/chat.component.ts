import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

// TODO:
//  1. demo with fixed sender and receiver id
//  2. get nearest ERT automatically
//  3. chat with command center


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(
    public chat: ChatService
  ) {}

  ngOnInit() { }

  public handleSubmitClick(senderUid_: string, receiverUid_: string) {
    console.log('submit clicked', senderUid_, receiverUid_);

    this.chat.init(senderUid_, receiverUid_, senderUid_);

    // this.messageObs.subscribe({
    //   next(msgs) {
    //     console.log(msgs);
    //     this.messages = msgs;
    //   },
    // });
    // this.messagesRef.push({ content: 'bye' });
  }
}
