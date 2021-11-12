import { FattureService } from './../services/fatture.service';
import { Component, OnInit } from '@angular/core';
import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-fatture',
  templateUrl: './detail-fatture.component.html',
  styleUrls: ['./detail-fatture.component.css']
})
export class DetailFattureComponent implements OnInit {

  dettaglioFatture: Fatture = {
    data: '',
    numero: 0,
    anno: 0,
    importo: '',
    stato: {
      id: undefined,
      nome: ''
    },
    cliente: {
      id: undefined,
      ragioneSociale: '',
      partitaIva: '',
      tipoCliente: '',
      email: '',
      pec: '',
      telefono: '',
      nomeContatto: '',
      cognomeContatto: '',
      telefonoContatto: '',
      emailContatto: '',
      indirizzoSedeOperativa: {
        id: undefined,
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: {
          id: undefined,
          nome: '',
          provincia: {
            id: undefined,
            nome: '',
            sigla: ''
          }
        }
      },
      indirizzoSedeLegale: {
        id: undefined,
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: {
          id: undefined,
          nome: '',
          provincia: {
            id: undefined,
            nome: '',
            sigla: ''
          }
        }
      },
      dataInserimento: '',
      dataUltimoContatto: '',
      fatturatoAnnuale: ''
    }
  };
  constructor(private fattureService: FattureService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if(element.id){
        this.fattureService.getFattureId(element.id).subscribe(fatture => this.dettaglioFatture = fatture);
      }
    });
  }

}
