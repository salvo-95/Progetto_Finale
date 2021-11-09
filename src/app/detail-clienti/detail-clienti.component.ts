import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';
import { Clienti } from '../interfaces/clienti';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-clienti',
  templateUrl: './detail-clienti.component.html',
  styleUrls: ['./detail-clienti.component.css']
})
export class DetailClientiComponent implements OnInit {

  detailClient: Clienti = {

    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
  
        nome: "",
        provincia: {
  
          nome: "",
          sigla: ""
        }
      }
    },
    indirizzoSedeLegale: {
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
  
        nome: "",
        provincia: {
  
          nome: "",
          sigla: ""
        }
      }
    },
    dataInserimento: "",
    dataUltimoContatto: ""
  };

  constructor(private ClientiService: ClientiService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if(element.id){
        this.ClientiService.getClient(element.id).subscribe(client => this.detailClient = client);
      }
    });
  }

}
