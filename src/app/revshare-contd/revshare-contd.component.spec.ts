import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevshareContdComponent } from './revshare-contd.component';

describe('RevshareContdComponent', () => {
  let component: RevshareContdComponent;
  let fixture: ComponentFixture<RevshareContdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevshareContdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevshareContdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
