import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnglishWord} from "../models/english-word";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllWordsTest(): Observable<EnglishWord[]>{
    return this.http.get<EnglishWord[]>('api/english-estonian');
  }
}
