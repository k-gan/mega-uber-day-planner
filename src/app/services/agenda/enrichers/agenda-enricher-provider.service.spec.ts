import { AgendaType } from "../agenda-type";
import { AgendaEnricherProviderService } from "./agenda-enricher-provider.service";
import { DefaultAgendaEnricher } from "./default-agenda-enricher";
import { TomekAgendaEnricher } from "./tomek-agenda-enricher";
import { TrainingAgendaEnricher } from "./training-agenda-enricher";

describe('AgendaEnricherProvder', () => {
    const enricherMap : Map<AgendaType, string> = new Map<AgendaType, string>([
        [AgendaType.Default, DefaultAgendaEnricher.name],
        [AgendaType.Tomek, TomekAgendaEnricher.name],
        [AgendaType.Training, TrainingAgendaEnricher.name],
    ]);

    const provider = new AgendaEnricherProviderService();

    for(let map of enricherMap) {
        const agendaType = map[0];
        const expectedEnricherType = map[1];

        it(`For ${ agendaType } agenda type, expect ${ expectedEnricherType } enricher.`, () => {
            const enricher = provider.getEnricher(agendaType);
            const actualEnricherType = enricher.constructor.name;

            expect(expectedEnricherType).toBe(actualEnricherType);
        });
    }
});