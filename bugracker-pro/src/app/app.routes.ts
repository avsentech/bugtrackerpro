import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'bugs', pathMatch: 'full' },
    {
        path: 'bugs',
        loadChildren: () => import('./features/bugs/bugs-module').then(m => m.BugsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'bugs' }
];
// Uses lazy loading to load feature modules for 'bugs' and 'auth'.
// The '**' wildcard route redirects any unknown paths back to 'bugs'.
// The empty path redirects to 'bugs' as the default route.
