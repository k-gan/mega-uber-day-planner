import { Time } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DayPlanSettings {
  readonly earliestAtOfficeTime: Time = { hours: 9, minutes: 0 };
  readonly latestAtOfficeTime: Time = { hours: 10, minutes: 30 };

  readonly earliestTomeksTime: Time = { hours: 8, minutes: 30 };
  readonly latestTomeksTime: Time = { hours: 9, minutes: 45 };

  readonly defaultTrainingTime: Time = { hours: 7, minutes: 0 };
  readonly earliestTrainingTime: Time = { hours: 6, minutes: 0 };
  readonly latestTrainingTime: Time = { hours: 9, minutes: 0 };

  readonly selectionTimesIncrements: Time = { hours: 0, minutes: 15 };
}