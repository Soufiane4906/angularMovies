import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-theater',
  templateUrl: './index-theater.component.html',
  styleUrls: ['./index-theater.component.css']
})
export class IndexTheaterComponent  implements OnInit {
  SaveChanges() :void{
   this.router.navigate(['/genres'])
  }
  
  /**
   *
   */
  constructor(private router:Router) {}
  ngOnInit (): void{
  
  }  
  }
  
  