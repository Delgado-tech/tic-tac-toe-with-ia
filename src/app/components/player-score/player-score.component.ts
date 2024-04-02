import { Component, Input } from '@angular/core';
import { LoaderIcon, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { twMerge } from 'tailwind-merge';

@Component({
	selector: 'app-player-score',
	standalone: true,
	imports: [LucideAngularModule],
	templateUrl: './player-score.component.html',
})
export class PlayerScoreComponent {
	@Input() Icon: LucideIconData = LoaderIcon;
	@Input() iconColor: string = 'text-sky-300';
	@Input() score: number = 0;
	@Input() highlight: boolean = false;

	protected twMerge = twMerge;
}
