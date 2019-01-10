import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGlobalScoresComponent } from './check-global-scores.component';

describe('CheckGlobalScoresComponent', () => {
  let component: CheckGlobalScoresComponent;
  let fixture: ComponentFixture<CheckGlobalScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGlobalScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGlobalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
