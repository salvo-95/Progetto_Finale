import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../interfaces/content';
import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';
import { NewFattura } from '../interfaces/new-fattura';
import { StatoFattura } from '../interfaces/stato-fattura';
import { ClientiService } from '../services/clienti.service';
import { CreaFattureService } from '../services/crea-fatture.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-crea-fatture',
  templateUrl: './crea-fatture.component.html',
  styleUrls: ['./crea-fatture.component.css']
})
export class CreaFattureComponent implements OnInit {
  clienti!: ContentFatture;
  

  title: string = "";

  newFatture: NewFattura = {
    data: "",
    numero: 0,
    anno: 2019,
    importo: "",
    stato: {
      id: 1,
      nome: "PAGATA"
    },
    cliente: {
      id: 1
    }
  }
  userEdit: boolean = true;
  tipiFatture: StatoFattura[] = [];

  constructor(private creaFatturaService: CreaFattureService, private router: Router,
    private fattureService: FattureService, private route: ActivatedRoute, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.title = "Nuova Fattura";

      } else {
        this.title = "Edit";
        this.fattureService.getFatture(element.id).subscribe(response => {
          this.newFatture = response.content;
          this.userEdit = false
        })
      }
    })
    this.getAllStato();
    this.clientiService.getAllClienti().subscribe(response => this.clienti = response);
  }

  getAllStato() {
    this.creaFatturaService.getAllStato().subscribe(response => this.tipiFatture = response.content);
  }


  saveFattura() {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.fattureService.createFatture(this.newFatture).subscribe(response => {
          this.router.navigate(['clienti/list'])
        })
      } else {
        this.fattureService.updateFattura(this.newFatture).subscribe(response => {
          console.log(response);
          this.router.navigate(['clienti/list'])
        })
      }
    })
  }


}
