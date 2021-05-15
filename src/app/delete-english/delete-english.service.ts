import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EnglishWord} from "../models/english-word";

@Injectable({
  providedIn: 'root'
})
export class DeleteEnglishService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<EnglishWord[]>{
    const url = 'api/english-estonian';
    return this.http.get<EnglishWord[]>(url);
  }

  deleteWord(id: number): Observable<EnglishWord[]> {
    const url = `api/english-estonian/${id}`;
    return this.http.delete<EnglishWord[]>(url, this.httpOptions);
  }

  deleteTranslation(word_id: number, translation_id: number): Observable<EnglishWord[]>{
    const url = `api/english-estonian/${word_id}/${translation_id}`;
    return this.http.delete<EnglishWord[]>(url, this.httpOptions);
  }

  getEstonianTranslation(word: string): Observable<JSON> {
    const url = `api/english-estonian/translate?word=${word}`;
    return this.http.get<JSON>(url);
  }
}
