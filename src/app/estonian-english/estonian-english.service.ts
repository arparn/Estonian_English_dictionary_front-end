import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstonianEnglishService {

  constructor(private http: HttpClient) { }

  getEnglishTranslation(word: string): Observable<JSON> {
    return this.http.get<JSON>(`api/estonian-english/translate?word=${word}`);
  }
}
