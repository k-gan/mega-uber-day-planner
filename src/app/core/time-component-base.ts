import { Time } from "@angular/common";
import { printTime } from "./DateTimeModifiers";

export abstract class TimeComponentBase {
  printTime(time: Time): string {
    return printTime(time);
  }
}