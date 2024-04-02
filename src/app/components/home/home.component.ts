import { Component } from '@angular/core';
import {
	CircleIcon,
	LucideAngularModule,
	RotateCcwIcon,
	XIcon,
} from 'lucide-angular';
import { GameService } from '../../services/game.service';
import { GameMode, Shape } from '../../services/game.service.interfaces';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { GameModeSelectorComponent } from '../game-mode-selector/game-mode-selector.component';
import { GameOverScreenComponent } from '../game-over-screen/game-over-screen.component';
import { PlayerScoreComponent } from '../player-score/player-score.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		LucideAngularModule,
		ButtonComponent,
		PlayerScoreComponent,
		GameOverScreenComponent,
		GameModeSelectorComponent,
		GameBoardComponent,
		FooterComponent,
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {
	protected readonly GameMode = GameMode;
	protected readonly Shape = Shape;

	// icones
	protected readonly XIcon = XIcon;
	protected readonly CircleIcon = CircleIcon;
	protected readonly ResetIcon = RotateCcwIcon;

	constructor(protected gameService: GameService) {
		gameService.start();
	}
}
