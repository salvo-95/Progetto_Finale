import { HttpClient } from '@angular/common/http';
import { Content } from './../interfaces/content';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Province } from '../interfaces/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlAPI = environment.urlAPI + 'api/province?page=0&size=20&sort=id,ASC';
  urlAPI2 = environment.urlAPI + 'api/province/';

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<Province>(this.urlAPI);
  }
}
