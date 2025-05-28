import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { Game } from "../../core/interfaces/game.interface";
import { GameService } from "../../core/services/game.service";
import { AuthService } from "../auth/core/services/auth.service";
import { GameCardComponent } from "../games-page/game-card/game-card.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [RouterModule, JsonPipe, FormsModule, GameCardComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  private router = inject(Router);
  searchValue: string = "";
  searchedGames: Game[] = [];

  constructor(
    private gameService: GameService,
    private authService: AuthService
  ) {}

  navigateToGamePage() {
    this.router.navigateByUrl("/games");
  }

  searchGame() {
    this.searchedGames = this.gameService.searchByTitle(this.searchValue);
  }

  logout() {
    this.authService.logOut();
  }
}
