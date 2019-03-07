import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPictureComponent } from './client-picture.component';

describe('ClientPictureComponent', () => {
  let component: ClientPictureComponent;
  let fixture: ComponentFixture<ClientPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
