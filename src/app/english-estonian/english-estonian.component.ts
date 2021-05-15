import { Component, OnInit } from '@angular/core';
import {EstonianWord} from "../models/estonian-word";
import {EnglishWord} from "../models/english-word";
import {EnglishEstonianService} from "./english-estonian.service";

@Component({
  selector: 'app-english-estonian',
  templateUrl: './english-estonian.component.html',
  styleUrls: ['./english-estonian.component.scss']
})
export class EnglishEstonianComponent implements OnInit {

  language = "Current language: English";
  translation = "Translate to: Estonian";
  label = 'Insert word to translate to estonian:';
  buttonTranslate = 'Translate';
  change_language = 'change language';

  found_exact = true;
  not_found_exact = 'Exact translation not found, maybe you meant: ';

  estonian_words: EstonianWord[] = [];
  english_words: EnglishWord[] = [];

  constructor( private englishEstonianService: EnglishEstonianService) { }

  ngOnInit(): void {
  }

  getEstonianTranslation(word: string): void {
    this.englishEstonianService.getEstonianTranslation(word).subscribe((response) => {
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
