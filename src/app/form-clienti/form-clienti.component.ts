import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../interfaces/clienti';
import { Comuni } from '../interfaces/comuni';
import { Province } from '../interfaces/province';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';
import { TipiClientiService } from '../services/tipi-clienti.service';

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
              id: 1,
              nome: "",
              provincia: {
                  id: 1,
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
              id: 1,
              nome: "",
              provincia: {
                  id: 1,
                  nome: "",
                  sigla: ""
              }
          }
      },
      dataInserimento: "2020-08-23T10:15:29.851+00:00",
      dataUltimoContatto: "2021-04-10T05:31:44.847+00:00"
}


tipicliente = [];
comuni: Comuni[]= [];
province: Province[]= [];
  TipiClientiService: any;


  constructor(private clientiService: ClientiService,
    private tipiClientiService: TipiClientiService,
    private ComuniService: ComuniService,
    private ProvinceService: ProvinceService,
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
      this.getComuni();
      this.getProvince();
      this.getAllTipiClienti();
    }

    getComuni(){
      this.ComuniService.getAllComuni().subscribe(response => this.comuni = response.content);
    }

    getProvince(){
      this.ProvinceService.getAllProvince().subscribe(response => this.province = response.content);
    }

    getAllTipiClienti(){
      this.tipiClientiService.getAllTipiClienti().subscribe(response => this.tipicliente = response);
    }

    saveClient(){
       console.log(this.editClient);
       this.clientiService.createClient(this.editClient).subscribe(response => {
        console.log(response);
        this.router.navigate(['clienti/list'])
      })
    }
    //   this.route.params.subscribe(element => {
    //     if(!element.id){
    //       this.clientiService.createClient(this.editClient).subscribe(response => {
    //         console.log(response);
    //         this.router.navigate(['clienti/list'])
    //       })
    //     } else {
    //       this.clientiService.updateClient(this.editClient).subscribe(response => {
    //         console.log(response);
    //         this.router.navigate(['clienti/list'])
    //       })
    //     }
    //   })
    // }

}
