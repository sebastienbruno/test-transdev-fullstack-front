import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [ApiService]})
export class CoreModule { }
