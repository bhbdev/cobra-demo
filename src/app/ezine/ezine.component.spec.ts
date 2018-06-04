import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzineComponent } from './ezine.component';

describe('EzineComponent', () => {
  let component: EzineComponent;
  let fixture: ComponentFixture<EzineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
