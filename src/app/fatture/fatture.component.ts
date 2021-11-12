import { FattureService } from './../services/fatture.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../interfaces/fatture';
import { NewFattura } from '../interfaces/new-fattura';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

   detailFatture!: Fatture[];
 

  constructor(private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.fattureService.getFatture(element.id).subscribe(response => this.detailFatture = response.content);
      }
    });
  }
  deleteFattura(item: Fatture){
    this.fattureService.removeFatture(item).subscribe(response => {
      this.fattureService.getAllFatture().subscribe(response => this.detailFatture = response.content);
    })
  }

  dettaglioFatture(item: Fatture) {
    this.router.navigate(['dettagliofatture', item.id])
  }

  selectFatture(item: Fatture){
    this.router.navigate(['fatture', item.id, 'edit'])
  }

  }