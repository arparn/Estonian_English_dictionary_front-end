import { Component, OnInit } from '@angular/core';
import {DeleteEnglishService} from "./delete-english.service";
import {EnglishWord} from "../models/english-word";

@Component({
  selector: 'app-delete-english',
  templateUrl: './delete-english.component.html',
  styleUrls: ['./delete-english.component.scss']
})
export class DeleteEnglishComponent implements OnInit {

  allWords: EnglishWord[];
  englishWords: EnglishWord[];

  constructor(private deleteEnglishService: DeleteEnglishService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.deleteEnglishService.getAll().subscribe( response => this.allWords = response);
  }

  deleteWord(id: number): void {
    this.deleteEnglishService.deleteWord(id).subscribe(response => {
      this.allWords = response;
      this.englishWords = [];
    });
  }

  deleteTranslation(word_id: number, translation_id: number): void {
    this.deleteEnglishService.deleteTranslation(word_id, translation_id).subscribe(response => {
      this.allWords = response;
      this.englishWords = [];
    });
  }

  getWord(word: string): void {
    this.deleteEnglishService.getEstonianTranslation(word).subscribe((response) => {
      if (response != null) {
        this.englishWords = response['wordList']
      } else {
        this.englishWords = [];
      }
    });
  }
}
