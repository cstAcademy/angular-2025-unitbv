import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getListOfUsers(): Observable<any> {
    return this.httpClient
      .get("https://reqres.in/api/users?page=1&per_page=11", {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        }),
        delay(2000)
      );
  }
}
