import { HttpClient } from '@angular/common/http';
import { Content } from './../interfaces/content';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comuni } from '../interfaces/comuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlAPI = environment.urlAPI + 'api/comuni?page=0&size=20&sort=id,ASC';
  urlAPI2 = environment.urlAPI + 'api/comuni/';

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<Comuni>(this.urlAPI);
  }
}
