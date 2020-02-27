import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing-fiel',
  templateUrl: './playing-fiel.component.html',
  styleUrls: ['./playing-fiel.component.scss']
})
export class PlayingFielComponent implements OnInit {
  
  
  constructor(public Router:Router) { 
    window.onscroll = function() {
      changedaynight();
    };
  
    function changedaynight() {
      if (document.body.scrollHeight > 30|| document.documentElement.scrollHeight > 30) {
          document.getElementById("borderPlayingFiel").className = "borderPlayingFielChange  ";
        
      } else {
          document.getElementById("borderPlayingFiel").className = "borderPlayingFiel mat-toolbar mat-toolbar-multiple-rows";
      
      }
    } 
  }
    
  

  ngOnInit(): void {
    
  }

  
  

}
