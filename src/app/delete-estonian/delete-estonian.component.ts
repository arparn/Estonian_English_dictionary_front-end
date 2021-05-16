import { Component, OnInit } from '@angular/core';
import {EnglishWord} from "../models/english-word";
import {DeleteEnglishService} from "../delete-english/delete-english.service";
import {DeleteEstonianService} from "./delete-estonian.service";

@Component({
  selector: 'app-delete-estonian',
  templateUrl: './delete-estonian.component.html',
  styleUrls: ['./delete-estonian.component.scss']
})
export class DeleteEstonianComponent implements OnInit {

  allWords: EnglishWord[];
  englishWords: EnglishWord[];

  constructor(private deleteEstonianService: DeleteEstonianService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.deleteEstonianService.getAll().subscribe( response => this.allWords = response);
  }

  deleteWord(id: number): void {
    this.deleteEstonianService.deleteWord(id).subscribe(response => {
      this.allWords = response;
      this.englishWords = [];
    });
  }

  deleteTranslation(word_id: number, translation_id: number): void {
    this.deleteEstonianService.deleteTranslation(word_id, translation_id).subscribe(response => {
      this.allWords = response;
      this.englishWords = [];
    });
  }

  getWord(word: string): void {
    this.deleteEstonianService.getEnglishTranslation(word).subscribe((response) => {
      if (response != null) {
        this.englishWords = response['wordList']
      } else {
        this.englishWords = [];
      }
    });
  }

}
