import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSolicitudeComponent } from './edit-solicitude.component';

describe('EditSolicitudeComponent', () => {
  let component: EditSolicitudeComponent;
  let fixture: ComponentFixture<EditSolicitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSolicitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSolicitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
