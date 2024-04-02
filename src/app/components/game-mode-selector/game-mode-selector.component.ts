import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameMode } from '../../services/game.service.interfaces';

@Component({
	selector: 'app-game-mode-selector',
	standalone: true,
	imports: [],
	templateUrl: './game-mode-selector.component.html',
})
export class GameModeSelectorComponent {
	protected GameMode = GameMode;

	constructor(protected gameService: GameService) {}
}
