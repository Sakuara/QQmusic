import { Component, OnInit,ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {  
  show:boolean = true;
  constructor(private elementRef:ElementRef) {}
  
  ngOnInit():any{
     $('.header_nav_tab1 li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
     })
  }
}
