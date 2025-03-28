import { Routes } from '@angular/router';

export const gamesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./games-page.component').then(
        (component) => component.GamesPageComponent
      ),
  },
];
