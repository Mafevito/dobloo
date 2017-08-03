import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudeDetailsComponent } from './solicitude-details.component';

describe('SolicitudeDetailsComponent', () => {
  let component: SolicitudeDetailsComponent;
  let fixture: ComponentFixture<SolicitudeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
