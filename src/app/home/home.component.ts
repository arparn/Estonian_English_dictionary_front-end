import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {EnglishWord} from "../models/english-word";
import {EstonianWord} from "../models/estonian-word";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  label = 'Insert word to translate to estonian:';
  buttonTranslate = 'Translate';
  change_language = 'Change language:';

  found_exact: boolean;

  estonian_words: EstonianWord[] = [];
  english_words: EnglishWord[] = [];


  ngOnInit(): void { }

  getEstonianTranslation(word: string): void {
    this.homeService.getEstonianTranslation(word).subscribe((response) => {
      if (response != null) {
        this.found_exact = response['foundExact'];
        this.estonian_words = response['wordList'];
      } else {
        this.estonian_words = [];
        this.found_exact = false;
      }
    });
  }
}
