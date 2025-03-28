import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [GameCardComponent, RouterModule],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss',
})
export class GamesPageComponent {
  // readonly router = inject(Router);
  cards = [1, 2, 3];

  constructor(private router: Router) {}

  navigateToGamePage() {
    this.router.navigateByUrl('/game-page');
  }
}
