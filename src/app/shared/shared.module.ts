import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PrixTotalPanierPipe } from './pipes';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrixTotalPanierPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, MatIcon, MatButton, PrixTotalPanierPipe]
})
export class SharedModule { }
