import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  exports : [
    SideBarComponent
  ]
})
export class SideBarModule { }
