import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (component) => component.DashboardComponent
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./features/games-page/games-page.routes').then(
        (child) => child.gamesRoutes
      ),
  },
];
