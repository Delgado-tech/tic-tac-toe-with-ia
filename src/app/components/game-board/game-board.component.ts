import { Component } from '@angular/core';
import {
	CircleIcon,
	LucideAngularModule,
	RotateCcwIcon,
	XIcon,
} from 'lucide-angular';
import { GameService } from '../../services/game.service';
import { Shape } from '../../services/game.service.interfaces';

@Component({
	selector: 'app-game-board',
	standalone: true,
	imports: [LucideAngularModule],
	templateUrl: './game-board.component.html',
})
export class GameBoardComponent {
	protected readonly XIcon = XIcon;
	protected readonly CircleIcon = CircleIcon;
	protected readonly ResetIcon = RotateCcwIcon;
	protected readonly Shape = Shape;

	constructor(protected gameService: GameService) {}
}
