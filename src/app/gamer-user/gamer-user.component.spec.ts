import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerUserComponent } from './gamer-user.component';

describe('GamerUserComponent', () => {
  let component: GamerUserComponent;
  let fixture: ComponentFixture<GamerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
