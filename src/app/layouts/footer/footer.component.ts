import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeDensity, ThemeMode, ThemeRadius, ThemeService } from 'wacom';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	year = new Date().getFullYear();

	readonly theme = inject(ThemeService);

	readonly pages = [
		{ label: 'HomeComponent', link: '/home' },
		{ label: 'ListComponent', link: '/list' },
		{ label: 'ProfileComponent', link: '/profile' },
		{ label: 'FormComponent', link: '/form' },
		{ label: 'TableComponent', link: '/table' },
		{ label: 'GalleryComponent', link: '/gallery' },
		{ label: 'ContentComponent', link: '/content' },
	] as const;

	readonly modes: readonly (ThemeMode | string)[] = ['light', 'dark', 'itkp'] as const;
	readonly densities: readonly ThemeDensity[] = ['comfortable', 'compact'] as const;
	readonly radiuses: readonly ThemeRadius[] = ['rounded', 'square'] as const;

	setMode(mode: ThemeMode | string) {
		this.theme.setMode(mode as ThemeMode);
	}
	setDensity(density: ThemeDensity) {
		this.theme.setDensity(density);
	}
	setRadius(radius: ThemeRadius) {
		this.theme.setRadius(radius);
	}
}
