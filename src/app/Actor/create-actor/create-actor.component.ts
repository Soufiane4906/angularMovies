import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent  implements OnInit {
  SaveChanges() :void{
   this.router.navigate(['/actors'])
  }
  
  /**
   *
   */
  constructor(private router:Router) {}
  ngOnInit (): void{
  
  }  
  }
  
  