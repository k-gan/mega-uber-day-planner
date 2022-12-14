import { Time } from "../core/time";
import { Agenda } from "./agenda/agenda";
import { AgendaPoint } from "./agenda/points/agenda-point";
import { DefaultAgendaPoint } from "./agenda/points/default-agenda-point";

export class DayPlan {
  public label: string;
  public atOffice: Time;
  public wakeUp: Time;
  public toBed: Time;
  public lastHRBump: Time;

  constructor(public readonly agenda: Agenda) {
    this.generateFromAgenda();
  }

  generateFromAgenda(): void {
    this.label = this.agenda.name;
    this.atOffice = this.getStartTime(DefaultAgendaPoint.AtOffice);
    this.wakeUp = this.getStartTime(DefaultAgendaPoint.WakeUp);
    this.toBed = this.getStartTime(DefaultAgendaPoint.ToBed);
    this.lastHRBump = this.getStartTime(DefaultAgendaPoint.LastHRBump);
  }

  getStartTime(point: AgendaPoint): Time {
    const agEl = this.agenda.agendaElements.find((a) => a.agenda === point);
    return agEl?.startTime;
  }
}
