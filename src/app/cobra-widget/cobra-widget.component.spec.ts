import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraWidgetComponent } from './cobra-widget.component';

describe('CobraWidgetComponent', () => {
  let component: CobraWidgetComponent;
  let fixture: ComponentFixture<CobraWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobraWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
