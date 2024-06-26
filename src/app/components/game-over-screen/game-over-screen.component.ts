import { Component } from '@angular/core';
import {
	CircleIcon,
	LucideAngularModule,
	RotateCcwIcon,
	XIcon,
} from 'lucide-angular';
import { GameService } from '../../services/game.service';
import { Shape } from '../../services/game.service.interfaces';
import { ButtonComponent } from '../button/button.component';
import { HomeComponent } from '../home/home.component';

@Component({
	selector: 'app-game-over-screen',
	standalone: true,
	imports: [LucideAngularModule, ButtonComponent, HomeComponent],
	templateUrl: './game-over-screen.component.html',
})
export class GameOverScreenComponent {
	protected readonly XIcon = XIcon;
	protected readonly CircleIcon = CircleIcon;
	protected readonly ResetIcon = RotateCcwIcon;
	protected readonly Shape = Shape;

	constructor(protected gameService: GameService) {}
}
