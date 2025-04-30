import { Component, effect, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Game } from "../../core/interfaces/game.interface";
import { GameService } from "../../core/services/game.service";
import { GameCardComponent } from "./game-card/game-card.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { AddGameFormComponent } from "../add-game-form/add-game-form.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-games-page",
  standalone: true,
  imports: [
    GameCardComponent,
    RouterModule,
    NzButtonModule,
    AddGameFormComponent,
  ],
  templateUrl: "./games-page.component.html",
  styleUrl: "./games-page.component.scss",
})
export class GamesPageComponent implements OnInit {
  // readonly router = inject(Router);
  arrayOfGames: Game[] = [];
  bestVotedGame!: Game;
  showAddGameForm: boolean = false;

  readonly subscription: Subscription = new Subscription();

  constructor(private router: Router, private gameService: GameService) {
    // this.gameService.bestGameSubject$.subscribe((game) => {
    //   console.log("game :", game);
    //   this.bestVotedGame = game;
    // });
    // ! effect in loc de subscribe
    effect(() => {
      const bestGame = this.gameService.bestGame();
      console.log("best game", bestGame);
      if (bestGame) {
        this.bestVotedGame = bestGame;
      }
    });

    this.subscription.add(
      this.gameService.listOfGamesChange$.subscribe(
        (updatedListOfGames: Game[]) => {
          this.arrayOfGames = updatedListOfGames;
        }
      )
    );
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

  toggleAddNewGame() {
    this.showAddGameForm = true;
  }
}
