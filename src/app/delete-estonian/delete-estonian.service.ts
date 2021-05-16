import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EnglishWord} from "../models/english-word";

@Injectable({
  providedIn: 'root'
})
export class DeleteEstonianService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<EnglishWord[]>{
    const url = 'api/estonian-english';
    return this.http.get<EnglishWord[]>(url);
  }

  deleteWord(id: number): Observable<EnglishWord[]> {
    const url = `api/estonian-english/${id}`;
    return this.http.delete<EnglishWord[]>(url, this.httpOptions);
  }

  deleteTranslation(word_id: number, translation_id: number): Observable<EnglishWord[]>{
    const url = `api/estonian-english/${word_id}/${translation_id}`;
    return this.http.delete<EnglishWord[]>(url, this.httpOptions);
  }

  getEnglishTranslation(word: string): Observable<JSON> {
    const url = `api/estonian-english/translate?word=${word}`;
    return this.http.get<JSON>(url);
  }
}
