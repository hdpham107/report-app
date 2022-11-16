import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeaderComponent } from './card-leader.component';

describe('CardLeaderComponent', () => {
  let component: CardLeaderComponent;
  let fixture: ComponentFixture<CardLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
