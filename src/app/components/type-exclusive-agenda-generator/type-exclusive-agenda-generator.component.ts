import { Component, OnInit } from '@angular/core';
import { AgendaGenerationService } from '../../services/agenda-generation.service';
import { AgendaSynchronizeService } from '../../services/agenda-synchronize.service';
import { AtOfficeTimesProviderService } from '../../services/at-office-times-provider.service';
import { AgendaModel } from '../agenda-generator/agenda-model';

@Component({
  selector: 'app-type-exclusive-agenda-generator',
  templateUrl: './type-exclusive-agenda-generator.component.html',
  styleUrls: ['./type-exclusive-agenda-generator.component.css'],
})
export class TypeExclusiveAgendaGeneratorComponent {
  Object = Object;
  model: AgendaModel;
  agendaTypes: string[] = ['Default', 'Training', "Tomek's"];
  aType: string = '';

  constructor(
    private agendaService: AgendaGenerationService,
    private agendaSync: AgendaSynchronizeService,
    atOfficeTimeService: AtOfficeTimesProviderService
  ) {
    const atOfficeTimes = atOfficeTimeService.generateAtOfficeSelection();
    this.model = new AgendaModel(atOfficeTimes);
  }

  onSubmit() {
    const agenda = this.agendaService.generateAgenda(
      this.model.upToDateAgendaInput
    );
    this.agendaSync.changeAgenda(agenda);
  }
}
