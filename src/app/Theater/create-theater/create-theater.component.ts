import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent  implements OnInit {
  SaveChanges() :void{
   this.router.navigate(['/theaters'])
  }
  
  /**
   *
   */
  constructor(private router:Router) {}
  ngOnInit (): void{
  
  }  
  }
  
  