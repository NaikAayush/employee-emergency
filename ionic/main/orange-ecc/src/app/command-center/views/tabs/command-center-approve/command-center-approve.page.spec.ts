import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandCenterApprovePage } from './command-center-approve.page';

describe('CommandCenterApprovePage', () => {
  let component: CommandCenterApprovePage;
  let fixture: ComponentFixture<CommandCenterApprovePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterApprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandCenterApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
