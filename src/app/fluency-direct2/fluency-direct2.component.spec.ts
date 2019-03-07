import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluencyDirect2Component } from './fluency-direct2.component';

describe('FluencyDirect2Component', () => {
  let component: FluencyDirect2Component;
  let fixture: ComponentFixture<FluencyDirect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluencyDirect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluencyDirect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
