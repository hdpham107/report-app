import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class CardPrintingService {

  constructor(private http: HttpClient) { }

  public getCardsPrinting(): Observable<Member[]>{
    const url = "https://63665cfb046eddf1bafe4717.mockapi.io/api/v1/Member";
    return this.http.get<Member[]>(url);
  }

  
}
