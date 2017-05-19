import { Component, AfterContentInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterContentInit{
  show:boolean = true;
  constructor(private elementRef:ElementRef) {}
  
  ngAfterContentInit(){
   
  }
}
