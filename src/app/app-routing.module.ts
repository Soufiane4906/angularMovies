import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './Genres/index-genres/index-genres.component';
import { IndexActorComponent } from './Actor/index-actor/index-actor.component';
import { IndexMovieComponent } from './Movies/index-movie/index-movie.component';
import { IndexTheaterComponent } from './Theater/index-theater/index-theater.component';
import { CreateGenresComponent } from './Genres/create-genres/create-genres.component';
import { CreateActorComponent } from './Actor/create-actor/create-actor.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { CreateTheaterComponent } from './Theater/create-theater/create-theater.component';
import { EditGenresComponent } from './Genres/edit-genres/edit-genres.component';
import { EditTheaterComponent } from './Theater/edit-theater/edit-theater.component';
import { EditMovieComponent } from './Movies/edit-movie/edit-movie.component';


const routes: Routes = [
  { path: '', component:HomeComponent  },

  { path: 'genres', component:IndexGenresComponent  },
  { path: 'genres/create', component:CreateGenresComponent  },
  { path: 'genres/edit/:id', component:EditGenresComponent  },

  { path: 'actors', component:IndexActorComponent  },
  { path: 'actors/create', component:CreateActorComponent  },
  { path: 'actors/edit/:id', component:EditGenresComponent  },

  { path: 'theaters', component:IndexTheaterComponent  },
  { path: 'theaters/create/', component:CreateTheaterComponent  },
  { path: 'theaters/edit/:id', component:EditTheaterComponent  },

  { path: 'movies', component:IndexMovieComponent  },
  { path: 'movies/create/', component:CreateMovieComponent  },
  { path: 'movies/edit/:id', component:EditMovieComponent  },

  {path:'*' , redirectTo:""}



  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ],
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ]
})
export class AppRoutingModule { }
