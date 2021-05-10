import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {EnglishWord} from "../models/english-word";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  words: EnglishWord[];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.homeService.getAllWordsTest().subscribe(words => this.words = words);
  }

}
