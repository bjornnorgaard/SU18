import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { map, tap, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://swapi.co/api'
  private cache: Observable<Character[]>;

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Character[]> {
    if (!this.cache) {
      this.cache = this.http.get<any>(`${this.url}/people`)
        .pipe(
          tap(_ => console.log('Hitting network')),
          map(data => data.results),
          publishReplay(1),
          refCount()
        );
    }
    console.log('Returning cache');
    return this.cache;
  }

  public getPerson(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.url}/people/${id}`);
  }

}
