import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableSectionComponent } from '../../components/table-section/table-section.component';

@Component({
	selector: 'app-table',
	imports: [TableSectionComponent],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}
