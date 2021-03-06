import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnglishEstonianService {

  constructor(private http: HttpClient) { }

  getEstonianTranslation(word: string): Observable<JSON> {
    return this.http.get<JSON>(`api/english-estonian/translate?word=${word}`);
  }
}
