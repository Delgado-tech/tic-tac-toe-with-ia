import { Component, Input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [],
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	@Input() text: string = '';
	@Input() innerClass: string = '';

	protected twMerge = twMerge;
}
