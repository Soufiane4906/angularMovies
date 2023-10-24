import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { GenresDTO } from './Genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  baseUrl=environment.apiBaseUrl;
  constructor(private httpClient : HttpClient) {
   }

   getAll() :Observable<GenresDTO[]>{
return this.httpClient.get<GenresDTO[]>(this.baseUrl+'/genres')
   }
}
