import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
