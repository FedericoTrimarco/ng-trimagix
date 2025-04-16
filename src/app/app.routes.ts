import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstallationPageComponent } from './pages/installation-page/installation-page.component';
import { QuickStartPageComponent } from './pages/quick-start-page/quick-start-page.component';
import { FormValidatorPageComponent } from './pages/form-validator-page/form-validator-page.component';
import { ModalConfirmPageComponent } from './pages/modal-confirm-page/modal-confirm-page.component';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'home-page', 
        pathMatch: 'full' 
    },
    {
        path: 'home-page',
        component: HomePageComponent
    },
    {
        path: 'getting-started/installation',
        component: InstallationPageComponent
    },
    {
        path: 'getting-started/quick-start',
        component: QuickStartPageComponent
    },
    {
        path: 'function-utils/form-group-validator',
        component: FormValidatorPageComponent
    },
    {
        path: 'function-utils/modal-confirm',
        component: ModalConfirmPageComponent
    },
];
