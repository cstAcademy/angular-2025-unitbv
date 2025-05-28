import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { LogInPayload } from "./core/interfaces/login.interface";
import { AuthService } from "./core/services/auth.service";

@Component({
  selector: "app-auth",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./auth.component.html",
  styleUrl: "./auth.component.scss",
})
export class AuthComponent {
  rememberMe: boolean = false;
  userToken: string | null = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NzNotificationService
  ) {
    this.userToken = this.authService.getToken();
  }

  onSuccessRequest(): void {
    const payload: LogInPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    this.authService
      .successLogIn(payload)
      .subscribe((response: { token: string }) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.userToken = this.authService.getToken();
        sessionStorage.setItem("userToken", response.token);
        this.router.navigateByUrl("/dashboard");
      });
  }

  onErrorRequest(): void {
    this.authService.errorLogIn({ email: "peter@klaven" }).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.error(err);
        this.notificationService.error("Error", "Something went wrong");
        this.userToken = null;
        this.authService.logOut();
      },
    });
  }

  onRememberMeRequest(): void {
    const payload: LogInPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    this.authService.successLogIn(payload).subscribe({
      next: (response: { token: string }) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.userToken = this.authService.getToken();

        if (this.rememberMe) {
          localStorage.setItem("userToken", response.token);
        } else {
          sessionStorage.setItem("userToken", response.token);
        }

        this.router.navigateByUrl("/dashboard");
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
