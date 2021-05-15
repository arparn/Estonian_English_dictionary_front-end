import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'T - DICTIONARY';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

  changeTitle(title: string): void {
    this.title = title;
    this.titleService.setTitle(title);
  }
}
