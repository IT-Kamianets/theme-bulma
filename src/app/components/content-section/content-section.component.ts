import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-content-section',
	imports: [],
	templateUrl: './content-section.component.html',
	styleUrl: './content-section.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSectionComponent {}
