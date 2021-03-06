import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGamesComponent } from './show-games.component';

describe('ShowGamesComponent', () => {
  let component: ShowGamesComponent;
  let fixture: ComponentFixture<ShowGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
