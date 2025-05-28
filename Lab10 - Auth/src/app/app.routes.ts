import { Routes } from "@angular/router";
import { authGuard } from "./features/auth/core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/auth/auth.component").then(
        (component) => component.AuthComponent
      ),
  },
  {
    path: "dashboard",
    canActivate: [authGuard()],
    loadComponent: () =>
      import("./features/dashboard/dashboard.component").then(
        (component) => component.DashboardComponent
      ),
  },
  {
    path: "games",
    loadChildren: () =>
      import("./features/games-page/games-page.routes").then(
        (child) => child.gamesRoutes
      ),
  },
  {
    path: "users",
    loadComponent: () =>
      import("./features/users-table/users-table.component").then(
        (component) => component.UsersTableComponent
      ),
  },
];
