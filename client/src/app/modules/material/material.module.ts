import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
