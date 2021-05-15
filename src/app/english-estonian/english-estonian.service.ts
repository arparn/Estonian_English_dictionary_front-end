import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EnglishWord} from "../models/english-word";

@Injectable({
  providedIn: 'root'
})
export class EnglishEstonianService {

  constructor(private http: HttpClient) { }

  getAllWords(): Observable<EnglishWord[]>{
    return this.http.get<EnglishWord[]>('api/english-estonian');
  }

  getEstonianTranslation(word: string): Observable<JSON> {
    return this.http.get<JSON>(`api/english-estonian/translate?word=${word}`);
  }
}
