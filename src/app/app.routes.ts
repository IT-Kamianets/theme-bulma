import { Routes } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';
import { ContentComponent } from './pages/content/content.component';
import { FormComponent } from './pages/form/form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './pages/table/table.component';
import { ListPageComponent } from './pages/list/list-item/list-item.component';

export const routes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'list', component: ListPageComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'form', component: FormComponent },
			{ path: 'table', component: TableComponent },
			{ path: 'gallery', component: GalleryComponent },
			{ path: 'content', component: ContentComponent },
		],
	},
];
