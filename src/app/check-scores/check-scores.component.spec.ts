import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckScoresComponent } from './check-scores.component';

describe('CheckScoresComponent', () => {
  let component: CheckScoresComponent;
  let fixture: ComponentFixture<CheckScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
