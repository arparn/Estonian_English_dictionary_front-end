import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddWordEnglishService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addWord(add: boolean, word: string, translation: string): Observable<boolean> {
    const url = `api/english-estonian?add=${add}&translation=${translation}&word=${word}`;
    return this.http.post<boolean>(url, this.httpOptions);
  }
}
