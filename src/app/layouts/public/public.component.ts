import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'app-public',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './public.component.html',
	styleUrl: './public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicComponent {}
