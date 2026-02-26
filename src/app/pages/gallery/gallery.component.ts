import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GallerySectionComponent } from '../../components/gallery-section/gallery-section.component';

@Component({
	selector: 'app-gallery',
	imports: [GallerySectionComponent],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
