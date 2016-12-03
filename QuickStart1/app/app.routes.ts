// ====== ./app/app.routes.ts ======

// from https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router

// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';

// Route Configuration
export const routes: Routes = [
    { path: 'cats', component: CatListComponent },
    { path: 'dogs', component: DogListComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);