import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormSectionComponent } from '../../components/form-section/form-section.component';

@Component({
	selector: 'app-form',
	imports: [FormSectionComponent],
	templateUrl: './form.component.html',
	styleUrl: './form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
