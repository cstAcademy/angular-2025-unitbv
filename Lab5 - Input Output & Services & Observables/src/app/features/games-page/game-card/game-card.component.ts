import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Game } from "../../../core/interfaces/game.interface";
import { GameService } from "../../../core/services/game.service";

@Component({
  selector: "app-game-card",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./game-card.component.html",
  styleUrl: "./game-card.component.scss",
})
export class GameCardComponent {
  @Input() game!: Game;

  review: string = "";

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {}

  clearReview() {
    this.review = "";
  }

  voteGame() {
    this.gameService.voteBestGame(this.game);
  }
}
