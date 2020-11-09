import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  state: boolean;
  constructor() { }

  ngOnInit(): void {
    this.state = false;
  }
  //Toggle Menu State
  SideBarShow_Hide(){
  if(this.state == true){
    this.state = false;
  }
  else{
    this.state = true;
  }
 }
}

