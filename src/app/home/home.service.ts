import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnglishWord} from "../models/english-word";
import {EstonianWord} from "../models/estonian-word";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllWords(): Observable<EnglishWord[]>{
    return this.http.get<EnglishWord[]>('api/english-estonian');
  }

  getEstonianTranslation(word: string): Observable<JSON> {
    return this.http.get<JSON>(`api/english-estonian/translate?word=${word}`);
  }
}
