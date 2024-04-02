import { Component } from '@angular/core';
import { GithubIcon, LinkedinIcon, LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [LucideAngularModule, ButtonComponent],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	protected readonly LinkedinIcon = LinkedinIcon;
	protected readonly GithubIcon = GithubIcon;

	protected readonly socialMediaLink = {
		github: 'https://github.com/Delgado-tech/',
		linkedin: 'https://www.linkedin.com/in/leonardo-delgado-1808891b7/',
	};
}
