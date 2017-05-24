import { Component, OnInit,ElementRef ,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterViewInit {  
  show:boolean = true;
  constructor(private elementRef:ElementRef) {}
  
  ngOnInit():void{
     $('.header_nav_tab1 li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
     });
  }

  ngAfterViewInit(){
    $('.header_nav_tab_sec li').on('click',function(){
         $(this).addClass('active_clr').siblings().removeClass('active_clr');
    })
  }
}
