import { Component } from "@angular/core";
import {
  NzNotificationModule,
  NzNotificationService,
} from "ng-zorro-antd/notification";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzTableModule } from "ng-zorro-antd/table";
import { User } from "./interfaces/user.interface";
import { UserService } from "./services/user.service";
@Component({
  selector: "app-users-table",
  standalone: true,
  imports: [
    NzTableModule,
    NzNotificationModule,
    NzSpinModule,
    NzPaginationModule,
  ],
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.scss",
})
export class UsersTableComponent {
  users: User[] = [];
  isLoading: boolean = true;

  constructor(
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  getListOfUsers() {
    this.userService.getListOfUsers().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.users = res;
        this.notificationService.success(
          "Succes",
          "The list was succesfully retrived"
        );
      },
      error: (err) => {
        this.users = [];
        this.notificationService.error("Error", "Something went wrong");
      },
    });
  }
}
