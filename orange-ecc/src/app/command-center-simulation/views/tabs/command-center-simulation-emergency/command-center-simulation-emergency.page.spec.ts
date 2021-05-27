import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationEmergencyPage } from './command-center-simulation-emergency.page';

describe('CommandCenterSimulationEmergencyPage', () => {
  let component: CommandCenterSimulationEmergencyPage;
  let fixture: ComponentFixture<CommandCenterSimulationEmergencyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterSimulationEmergencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandCenterSimulationEmergencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
