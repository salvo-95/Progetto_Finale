import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Clienti } from '../interfaces/clienti';
import { Content } from '../interfaces/content';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {

  title: string = "";
  editClient: Clienti = {

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
  }

  constructor(private clientiService: ClientiService,
    private route: ActivatedRoute,
    private router: Router) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(element => {
        if (!element.id){
          this.title = "Nuovo Cliente";
        }else {
          this.title = "Edit";
          this.clientiService.getClient(element.id).subscribe(client  => this.editClient = client)
  
        }
      })
    }
    saveClient(){
      this.route.params.subscribe(element => {
        if(!element.id){
          let obj = {
            "ragioneSociale": "",
            "partitaIva": "",
            "tipoCliente": "",
            "email": "",
            "pec": "",
            "telefono": "",
            "nomeContatto": "",
            "cognomeContatto": "err",
            "telefonoContatto": "",
            "emailContatto": "",
            "indirizzoSedeOperativa": {
                "via": "",
                "civico": "",
                "cap": "",
                "localita": "",
                "comune": {
                    "id": 1,
                    "nome": "",
                    "provincia": {
                        "id": 1,
                        "nome": "",
                        "sigla": ""
                    }
                }
            },
            "indirizzoSedeLegale": {
                "via": "",
                "civico": "",
                "cap": "",
                "localita": "",
                "comune": {
                    "id": 1,
                    "nome": "",
                    "provincia": {
                        "id": 1,
                        "nome": "",
                        "sigla": ""
                    }
                }
            },
            "dataInserimento": "",
            "dataUltimoContatto": ""
        }
          this.clientiService.createClient(obj).subscribe(response => {
            console.log(response);
            this.router.navigate(['clienti/list'])
          })
        } else {
          this.clientiService.updateClient(this.editClient).subscribe(response => {
            console.log(response);
            this.router.navigate(['clienti/list'])
          })
        }
      })
    }

}
