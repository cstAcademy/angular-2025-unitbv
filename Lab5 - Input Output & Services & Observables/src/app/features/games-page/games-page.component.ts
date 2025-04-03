import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Game } from "../../core/interfaces/game.interface";
import { GameService } from "../../core/services/game.service";
import { GameCardComponent } from "./game-card/game-card.component";

@Component({
  selector: "app-games-page",
  standalone: true,
  imports: [GameCardComponent, RouterModule],
  templateUrl: "./games-page.component.html",
  styleUrl: "./games-page.component.scss",
})
export class GamesPageComponent implements OnInit {
  // readonly router = inject(Router);
  arrayOfGames: Game[] = [];
  bestVotedGame!: Game;

  constructor(private router: Router, private gameService: GameService) {
    this.gameService.bestGameSubject$.subscribe((game) => {
      console.log("game :", game);
      this.bestVotedGame = game;
    });
  }

  ngOnInit(): void {
    this.getListOfGames();
  }

  getListOfGames() {
    this.arrayOfGames = this.gameService.getListOfGames();
  }

  navigateToGamePage() {
    this.router.navigateByUrl("/game-page");
  }
}
