import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluencyDirectComponent } from './fluency-direct.component';

describe('FluencyDirectComponent', () => {
  let component: FluencyDirectComponent;
  let fixture: ComponentFixture<FluencyDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluencyDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluencyDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
