import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  value: string = "";

  transform(value: any): any {
    this.value = value.split("").reverse().join("");

    return this.value;
  }
}
