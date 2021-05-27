import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandCenterSimulationTabsPage } from './command-center-simulation-tabs.page';

describe('CommandCenterSimulationTabsPage', () => {
  let component: CommandCenterSimulationTabsPage;
  let fixture: ComponentFixture<CommandCenterSimulationTabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterSimulationTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandCenterSimulationTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
