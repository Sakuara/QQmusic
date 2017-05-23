import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideStaticComponent } from './slide-static.component';

describe('SlideStaticComponent', () => {
  let component: SlideStaticComponent;
  let fixture: ComponentFixture<SlideStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
