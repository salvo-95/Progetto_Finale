import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentFatture } from '../interfaces/content-fatture';

@Injectable({
  providedIn: 'root'
})
export class CreaFattureService {

  urlNew = environment.urlAPI + 'api/statifattura'

  constructor(private http: HttpClient) { }

  getAllStato(){
    return this.http.get<ContentFatture>(this.urlNew);
  }
}
