import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverScreenComponent } from './game-over-screen.component';

describe('GameOverScreenComponent', () => {
  let component: GameOverScreenComponent;
  let fixture: ComponentFixture<GameOverScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOverScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameOverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
