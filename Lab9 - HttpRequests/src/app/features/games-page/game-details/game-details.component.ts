import { UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Game } from "../../../core/interfaces/game.interface";
import { ReversePipe } from "../../../core/pipes/custom-reverse.pipe";
import { GameService } from "../../../core/services/game.service";

@Component({
  selector: "app-game-details",
  standalone: true,
  imports: [UpperCasePipe, ReversePipe],
  templateUrl: "./game-details.component.html",
  styleUrl: "./game-details.component.scss",
})
export class GameDetailsComponent {
  gameDetails: Game | null = null;

  // ! Ex. citire query params din ruta
  // constructor(private route: ActivatedRoute, private gameService: GameService) {
  //   this.route.queryParams.subscribe((params: Params) => {
  //     console.log(params);
  //     if (params["id"]) {
  //       const gameId = Number(params["id"]);
  //       console.log(gameId);
  //       this.gameDetails = this.gameService.getGameDetails(gameId);
  //       console.log(this.gameDetails);
  //     }
  //   });
  // }

  // ! Ex. citire path params din ruta
  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params["id"]) {
        const gameId = Number(params["id"]);
        console.log(gameId);
        this.gameDetails = this.gameService.getGameDetails(gameId);
        console.log(this.gameDetails);
      }
    });
  }
}
