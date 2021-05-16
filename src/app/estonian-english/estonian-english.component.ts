import { Component, OnInit } from '@angular/core';
import {EnglishWord} from "../models/english-word";
import {EstonianEnglishService} from "./estonian-english.service";
import {EstonianWord} from "../models/estonian-word";

@Component({
  selector: 'app-estonian-english',
  templateUrl: './estonian-english.component.html',
  styleUrls: ['./estonian-english.component.scss']
})
export class EstonianEnglishComponent implements OnInit {

  found_exact = true;

  english_words: EnglishWord[] = [];
  history: EstonianWord[] = [];

  not_found_text = 'Exact translation not found, maybe you meant: ';

  constructor(private estonianEnglishService: EstonianEnglishService) { }

  ngOnInit(): void {
  }

  getEnglishTranslation(word: string): void{
    this.estonianEnglishService.getEnglishTranslation(word).subscribe((response) => {
      if (response != null) {
        this.found_exact = response['foundExact'];
        this.english_words = response['wordList'];
        this.history.push.apply(this.history, response['wordList']);
        if (this.english_words.length < 1) {
          this.not_found_text = 'Translation not found';
        } else {
          this.not_found_text = 'Exact translation not found, maybe you meant: ';
        }
      } else {
        this.english_words = [];
        this.found_exact = true;
      }
    })
  }

}
