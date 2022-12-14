import { AgendaInput } from "../../agenda-input";
import { Agenda } from "../agenda";
import { DefaultAgendaPoint } from "../points/default-agenda-point";
import { AgendaEnricher } from "./agenda-enricher";

export class WorkoutAgendaEnricher implements AgendaEnricher {
  enrichAgenda(agenda: Agenda, input: AgendaInput): Agenda {
    if (input.running) {
      console.log("Running is not possible when in training mode.");
    }
    if (input.morningPages) {
      agenda.addPointAfter(
        DefaultAgendaPoint.MorningPages,
        DefaultAgendaPoint.AtOffice
      );
    }

    return agenda;
  }
}
