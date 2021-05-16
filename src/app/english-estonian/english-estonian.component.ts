import { Component, OnInit } from '@angular/core';
import {EstonianWord} from "../models/estonian-word";
import {EnglishEstonianService} from "./english-estonian.service";

@Component({
  selector: 'app-english-estonian',
  templateUrl: './english-estonian.component.html',
  styleUrls: ['./english-estonian.component.scss']
})
export class EnglishEstonianComponent implements OnInit {

  found_exact = true;

  estonian_words: EstonianWord[] = [];
  history: EstonianWord[] = [];

  not_found_text = 'Exact translation not found, maybe you meant: ';

  constructor(private englishEstonianService: EnglishEstonianService) { }

  ngOnInit(): void {
  }

  getEstonianTranslation(word: string): void {
    this.englishEstonianService.getEstonianTranslation(word).subscribe((response) => {
      if (response != null) {
        this.found_exact = response['foundExact'];
        this.estonian_words = response['wordList'];
        this.history.push.apply(this.history, response['wordList']);
        if (this.estonian_words.length < 1) {
          this.not_found_text = 'Translation not found';
        } else {
          this.not_found_text = 'Exact translation not found, maybe you meant: ';
        }
      } else {
        this.estonian_words = [];
        this.found_exact = true;
      }
    });
  }
}
