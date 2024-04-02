import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModeSelectorComponent } from './game-mode-selector.component';

describe('GameModeSelectorComponent', () => {
  let component: GameModeSelectorComponent;
  let fixture: ComponentFixture<GameModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameModeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
