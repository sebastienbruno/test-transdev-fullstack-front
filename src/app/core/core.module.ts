import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajetService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TrajetService]})
export class CoreModule { }
