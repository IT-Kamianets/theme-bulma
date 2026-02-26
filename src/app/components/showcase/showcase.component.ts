import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-showcase',
	imports: [],
	templateUrl: './showcase.component.html',
	styleUrl: './showcase.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {}
