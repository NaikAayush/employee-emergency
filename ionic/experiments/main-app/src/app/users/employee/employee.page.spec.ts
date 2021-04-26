import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeePage } from './employee.page';

describe('EmployeePage', () => {
  let component: EmployeePage;
  let fixture: ComponentFixture<EmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
