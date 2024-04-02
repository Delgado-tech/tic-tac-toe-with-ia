import { Component, Input } from '@angular/core';
import { CircleIcon, LucideAngularModule, XIcon } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';
import { HomeComponent } from '../home/home.component';
import { Shape } from '../home/home.interfaces';

@Component({
	selector: 'app-game-over-screen',
	standalone: true,
	imports: [LucideAngularModule, ButtonComponent, HomeComponent],
	templateUrl: './game-over-screen.component.html',
})
export class GameOverScreenComponent {
	@Input() winner?: Shape;
	@Input() isDraw: boolean = false;

	protected readonly XIcon = XIcon;
	protected readonly CircleIcon = CircleIcon;
	protected readonly Shape = Shape;
}
