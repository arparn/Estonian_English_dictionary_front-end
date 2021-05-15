import { Component, OnInit } from '@angular/core';
import {EnglishWord} from "../models/english-word";
import {EstonianEnglishService} from "./estonian-english.service";

@Component({
  selector: 'app-estonian-english',
  templateUrl: './estonian-english.component.html',
  styleUrls: ['./estonian-english.component.scss']
})
export class EstonianEnglishComponent implements OnInit {

  found_exact = true;

  english_words: EnglishWord[] = [];

  not_found_text = 'Täpset tõlget ei leitud, võib-olla mõtlesite: ';

  constructor(private estonianEnglishService: EstonianEnglishService) { }

  ngOnInit(): void {
  }

  getEnglishTranslation(word: string): void{
    this.estonianEnglishService.getEnglishTranslation(word).subscribe((response) => {
      if (response != null) {
        this.found_exact = response['foundExact'];
        this.english_words = response['wordList'];
        if (this.english_words.length < 1) {
          this.not_found_text = 'Tõlget ei leitud';
        } else {
          this.not_found_text = 'Täpset tõlget ei leitud, võib-olla mõtlesite: ';
        }
      } else {
        this.english_words = [];
        this.found_exact = true;
      }
    })
  }

}
