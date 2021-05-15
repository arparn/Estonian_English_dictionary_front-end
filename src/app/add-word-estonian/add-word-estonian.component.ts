import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {FormControl, Validators} from "@angular/forms";
import {AddWordEstonianService} from "./add-word-estonian.service";

@Component({
  selector: 'app-add-word-estonian',
  templateUrl: './add-word-estonian.component.html',
  styleUrls: ['./add-word-estonian.component.scss']
})
export class AddWordEstonianComponent implements OnInit {

  addCheck: any = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private addWordEstonianService: AddWordEstonianService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  wordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
    Validators.minLength(2)
  ]);

  wordFormControl2 = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z]*'),
    Validators.minLength(2)
  ]);

  add(add: boolean, word: string, translation: string): void{
    if (word == '' || translation == '') {
      this._snackBar.open('You need to insert correct word and translation!', 'Cancel', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
      });
    } else {
      this.addWordEstonianService.addWord(add, word, translation).subscribe(response => {
        if (response) {
          this._snackBar.open('Word/Translation added!', 'Cancel', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
          });
        } else {
          this._snackBar.open('Word/Translation already exists!', 'Cancel', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
          });
        }
      })
    }
  }

}
