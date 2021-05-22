import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat-service/chat.service';

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.page.html',
  styleUrls: ['./employee-chat.page.scss'],
})
export class EmployeeChatPage implements OnInit {
  @ViewChild('msgInput') msgInput: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;

  constructor(public chat: ChatService) {}

  ngOnInit() {}

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

  sendChatMessage(message) {
    this.chat.sendMessage(message);
    this.messageInput.nativeElement.value = '';
  }
}
