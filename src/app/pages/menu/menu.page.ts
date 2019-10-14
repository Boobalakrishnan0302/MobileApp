import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath=''
  pages=[
    {
      title:'ListView',
      url:'/menu/first'
    },{
      title:'ListDetails',
      url:'/menu/second'
    }
  ]
  value1="fasle";

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url){
        this.selectedPath=event.url;
      }
    });
   }

  ngOnInit() {
  }

}
