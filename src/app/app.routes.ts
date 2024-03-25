import { Routes } from '@angular/router';
import { AdsListComponent } from './ads-list/ads-list.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { DeleteAdComponent } from './delete-ad/delete-ad.component';
import { NewAdComponent } from './new-ad/new-ad.component';

export const routes: Routes = [
    { path: 'ads', component: AdsListComponent },
    { path: 'ads/edit/:id', component: EditAdComponent },
    { path: 'ads/delete', component: DeleteAdComponent },
    { path: 'ads/new', component: NewAdComponent },

    { path: '', redirectTo: '/ads', pathMatch: 'full' }

];
