import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';
import { PathfindingService } from 'src/app/employee/services/pathfinding/pathfinding.service';
import { WebsocketService } from 'src/app/employee/services/websocket/websocket.service';
import { ChatService } from 'src/app/employee/views/tabs/employee-chat/chat-service/chat.service';
import { Point } from 'src/app/employee/views/tabs/employee-map/models/point';

@Component({
  selector: 'app-ert-chat',
  templateUrl: './ert-chat.page.html',
  styleUrls: ['./ert-chat.page.scss'],
})
export class ErtChatPage implements OnInit {
  @ViewChild('msgInput') msgInput: ElementRef;
  @ViewChild('messageInput') messageInput: ElementRef;

  private ertCollection: AngularFirestoreCollection;
  private ertUids: string[];
  private ertLocations: any[];
  private ertSubjects: WebSocketSubject<any>[];

  private curPos = new Point(582, 117);
  private nearestErt: string;

  // uuidMap of the map to download
  uuidMap: string = 'a246ddf4-3ded-49b9-bacf-fbf7b700e49e';

  constructor(
    public chat: ChatService,
    private firestore: AngularFirestore,
    private websocket: WebsocketService,
    private pathfinding: PathfindingService
  ) {}

  async ngOnInit() {
    this.ertCollection = this.firestore.collection('users');

    let ertDoc = await this.ertCollection.get().toPromise();

    this.ertUids = ["sam"];
    this.ertLocations = Array(1).fill(null);
    // for (let i = 0; i < ertDoc.docs.length; ++i) {
    //   let data = ertDoc.docs[i].data();
    //   if (!data.ert) {
    //     this.ertUids.push(data.uid);
    //   }
    // }

    console.log(this.ertUids);

    for (let i = 0; i < this.ertUids.length; ++i) {
      const ertUid = this.ertUids[i];
      const conn = this.websocket.connectSocket(
        'listen?id=' + ertUid,
        (e) => e.data
      );

      const data: any = await conn.asObservable().pipe(take(2)).toPromise();
      console.log('aaa got data', data);

      try {
        let data2 = JSON.parse(data);
        console.log(data2);
        this.ertLocations[i] = data2;
        console.log(this.ertLocations);
        console.log(this.ertUids);
      } catch (error) {
        console.log('could not json parse', error);
      }
    }

    await this.pathfinding.initialize(this.uuidMap);
    console.log(this.curPos, this.ertLocations);
    let minTarget = (await this.pathfinding.getPath(
      this.curPos,
      this.ertLocations,
      false,
      true,
      true
    )) as Point;
    console.log('got min target', minTarget);

    this.nearestErt = this.ertUids[0];
    if (minTarget) {
      for (let i = 0; i < this.ertLocations.length; ++i) {
        const ertLoc = this.ertLocations[i];

        if (ertLoc.x == minTarget.x && ertLoc.y == minTarget.y) {
          this.nearestErt = this.ertUids[i];
          console.log('got nearest ert', i, this.nearestErt);
          break;
        }
      }
    }
    this.handleSubmitClick('LxhvXHuCJxUXITPfzmYAnKJb6uf2');
  }

  public handleSubmitClick(senderUid_: string) {
    console.log('submit clicked', senderUid_, this.nearestErt);

    this.chat.init(senderUid_, this.nearestErt, senderUid_);

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
