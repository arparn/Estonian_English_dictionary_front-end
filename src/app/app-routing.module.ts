import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellService} from "./shell/shell.service";
import {EstonianEnglishComponent} from "./estonian-english/estonian-english.component";
import {EnglishEstonianComponent} from "./english-estonian/english-estonian.component";
import {AddWordEnglishComponent} from "./add-word-english/add-word-english.component";
import {AddWordEstonianComponent} from "./add-word-estonian/add-word-estonian.component";
import {DeleteEnglishComponent} from "./delete-english/delete-english.component";
import {DeleteEstonianComponent} from "./delete-estonian/delete-estonian.component";

const routes: Routes = [
  ShellService.childRoutes([
    { path: '', redirectTo: '/estonian-english', pathMatch: 'full' },
    { path: 'estonian-english', component: EstonianEnglishComponent },
    { path: 'english-estonian', component: EnglishEstonianComponent },
    { path: 'add-english', component: AddWordEnglishComponent },
    { path: 'add-estonian', component: AddWordEstonianComponent },
    { path: 'delete-english', component: DeleteEnglishComponent },
    { path: 'delete-estonian', component: DeleteEstonianComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
