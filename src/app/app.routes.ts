import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: '', component: Contact}
];
