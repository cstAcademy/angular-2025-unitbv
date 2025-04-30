import { Component, inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormHelper } from "../../core/helpers/form.helper";
import { NzButtonModule } from "ng-zorro-antd/button";
import { GameService } from "../../core/services/game.service";
import { Game } from "../../core/interfaces/game.interface";

@Component({
  selector: "app-add-game-form",
  standalone: true,
  imports: [
    NzFormModule,
    ReactiveFormsModule, //*required for forms!
    NzInputModule,
    NzButtonModule,
  ],
  templateUrl: "./add-game-form.component.html",
  styleUrl: "./add-game-form.component.scss",
})
export class AddGameFormComponent implements OnInit {
  gameForm!: FormGroup;
  gameService = inject(GameService);

  ngOnInit(): void {
    this.createGameForm();
  }

  createGameForm(): void {
    this.gameForm = new FormGroup({
      gameName: new FormControl("", { validators: [Validators.required] }),
      gameImage: new FormControl("", {
        validators: [Validators.required, FormHelper.invalidUrlCustomValidator],
      }),
      gameDescription: new FormControl("", {
        validators: [Validators.maxLength(1000)],
      }),
    });
  }

  submitForm(): void {
    const newGame: Game = {
      title: this.gameName.value,
      image: this.gameImage.value,
      description: this.gameDescription.value,
    };

    this.gameService.updateListOfGames(newGame);
    this.resetForm();
  }

  resetForm(): void {
    this.gameForm.reset();
  }

  // * getters
  get gameName(): AbstractControl {
    return this.gameForm.controls["gameName"];
  }

  get gameImage(): AbstractControl {
    return this.gameForm.controls["gameImage"];
  }

  get gameDescription(): AbstractControl {
    return this.gameForm.controls["gameDescription"];
  }
}
