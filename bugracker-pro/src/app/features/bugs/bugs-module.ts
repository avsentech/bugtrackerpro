import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugFormComponent } from './bug-form.component/bug-form.component';
import { BugDetailsComponent } from './bug-details.component/bug-details.component';

const routes: Routes = [
  { path: '', component: BugListComponent },
  { path: 'new', component: BugFormComponent },
  { path: ':id', component: BugDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BugListComponent
  ]
})
export class BugsModule { }