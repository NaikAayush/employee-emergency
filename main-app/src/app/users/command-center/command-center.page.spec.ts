import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandCenterPage } from './command-center.page';

describe('CommandCenterPage', () => {
  let component: CommandCenterPage;
  let fixture: ComponentFixture<CommandCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
