import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../../core/interfaces/game.interface';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  game: Game = {
    title: 'Dwarf Fortress',
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868',
    description:
      "The deepest, most intricate simulation of a world that's ever been created.",
  };

  review: string = '';

  clearReview() {
    this.review = '';
  }
}
