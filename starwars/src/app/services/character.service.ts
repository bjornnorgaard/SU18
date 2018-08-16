import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://swapi.co/api'
  private cache: Character[] = [];

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Character[]> {
    return this.http.get<any>(`${this.url}/people`)
      .pipe(
        map(data => {
          data.results.concat(this.cache);
          return data.results
        }),
        tap(data => {
          console.log(data);
        }),
      );
  }

  public getPerson(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.url}/people/${id}`);
  }

}
