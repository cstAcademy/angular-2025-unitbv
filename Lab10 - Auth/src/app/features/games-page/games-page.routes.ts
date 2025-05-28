import { Routes } from "@angular/router";

export const gamesRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./games-page.component").then(
        (component) => component.GamesPageComponent
      ),
  },

  // {
  //   path: "details",
  //   loadComponent: () =>
  //     import("./game-details/game-details.component").then(
  //       (component) => component.GameDetailsComponent
  //     ),
  // },
  // ! Ex. ruta cu path params
  {
    path: "details/:id",
    loadComponent: () =>
      import("./game-details/game-details.component").then(
        (component) => component.GameDetailsComponent
      ),
  },
];
