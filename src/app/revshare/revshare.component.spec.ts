import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevshareComponent } from './revshare.component';

describe('RevshareComponent', () => {
  let component: RevshareComponent;
  let fixture: ComponentFixture<RevshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
