import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './shell/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnglishEstonianComponent } from './english-estonian/english-estonian.component';
import { EstonianEnglishComponent } from './estonian-english/estonian-english.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import { AddWordEnglishComponent } from './add-word-english/add-word-english.component';
import { AddWordEstonianComponent } from './add-word-estonian/add-word-estonian.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DeleteEnglishComponent } from './delete-english/delete-english.component';
import { DeleteEstonianComponent } from './delete-estonian/delete-estonian.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    EnglishEstonianComponent,
    EstonianEnglishComponent,
    AddWordEnglishComponent,
    AddWordEstonianComponent,
    DeleteEnglishComponent,
    DeleteEstonianComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    ScrollingModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TooltipModule, NgbModule]
})
export class AppModule { }
