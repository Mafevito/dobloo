import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudeListComponent } from './solicitude-list.component';

describe('SolicitudeListComponent', () => {
  let component: SolicitudeListComponent;
  let fixture: ComponentFixture<SolicitudeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
