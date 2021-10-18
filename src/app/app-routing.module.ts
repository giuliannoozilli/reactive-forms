import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  { path: 'tempf', component: TemplateformsComponent },
  { path: 'reactf', component: ReactiveformsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
