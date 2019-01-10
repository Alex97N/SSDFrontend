import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUserScoresComponent } from './check-user-scores.component';

describe('CheckUserScoresComponent', () => {
  let component: CheckUserScoresComponent;
  let fixture: ComponentFixture<CheckUserScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUserScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUserScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
