import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../services/clienti.service';
import { Clienti } from '../interfaces/clienti';
import { Router } from '@angular/router';
import { Content } from '../interfaces/content';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  clienti!: Content

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(response => this.clienti = response)
  }

  deleteClient(item: Clienti){
    this.clientiService.removeClienti(item).subscribe(response => {
      this.clientiService.getAllClienti().subscribe(response => this.clienti = response);
    })
  }

  detailClient(item: Clienti) {
    this.router.navigate(['dettagliocliente', item.id])
  }

  selectClient(item: Clienti){
    this.router.navigate(['client', item.id, 'edit'])
  }

}
