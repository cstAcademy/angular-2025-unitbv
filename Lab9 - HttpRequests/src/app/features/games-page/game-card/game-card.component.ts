import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  output,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Game } from "../../../core/interfaces/game.interface";

@Component({
  selector: "app-game-card",
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: "./game-card.component.html",
  styleUrl: "./game-card.component.scss",
})
export class GameCardComponent {
  //! Exemplu de input
  // @Input({required:true}) game!: Game; // Classic
  readonly game = input.required<Game>(); // input signal

  // ! Exemplu de output
  @Output() gameEvent: EventEmitter<Game> = new EventEmitter<Game>(); // Classic
  readonly bestGame = output<Game>(); // output signal

  // Ex de computed
  gameTitle = computed(() => this.game().title);

  review = signal<string>(""); // signal simplu

  clearReview() {
    this.review.set(""); // setarea unei valori noi intr-un signal
  }

  voteGame() {
    // ! exemplu de emit / trigger pe signal din serviciu
    // this.gameService.bestGame.set(this.game()); SAU
    // this.gameEvent.emit(this.game()); SAU
    this.bestGame.emit(this.game());
  }
}
