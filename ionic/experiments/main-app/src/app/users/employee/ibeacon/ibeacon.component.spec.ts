import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IbeaconComponent } from './ibeacon.component';

describe('IbeaconComponent', () => {
  let component: IbeaconComponent;
  let fixture: ComponentFixture<IbeaconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbeaconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IbeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
