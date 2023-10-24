import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexGenresComponent } from './Genres/index-genres/index-genres.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateGenresComponent } from './Genres/create-genres/create-genres.component';
import { IndexActorComponent } from './Actor/index-actor/index-actor.component';
import { CreateActorComponent } from './Actor/create-actor/create-actor.component';
import { CreateTheaterComponent } from './Theater/create-theater/create-theater.component';
import { IndexTheaterComponent } from './Theater/index-theater/index-theater.component';
import { IndexMovieComponent } from './Movies/index-movie/index-movie.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { EditGenresComponent } from './Genres/edit-genres/edit-genres.component';
import { EditActorComponent } from './Actor/edit-actor/edit-actor.component';
import { EditMovieComponent } from './Movies/edit-movie/edit-movie.component';
import { EditTheaterComponent } from './Theater/edit-theater/edit-theater.component';
import { FormGenreComponent } from './Genres/form-genre/form-genre.component';
import {MatFormFieldModule} from '@angular/material/form-field' 
import {MatInputModule} from '@angular/material/input' 
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
    
    MenuComponent,
         CreateGenresComponent,
         IndexActorComponent,
         CreateActorComponent,
         CreateTheaterComponent,
         IndexTheaterComponent,
         IndexMovieComponent,
         CreateMovieComponent,
         IndexGenresComponent,
         HomeComponent,
         EditGenresComponent,
         EditActorComponent,
         EditMovieComponent,
         EditTheaterComponent,
         FormGenreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
