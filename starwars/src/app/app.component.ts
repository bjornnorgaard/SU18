import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  characters: Observable<Character[]>;

  constructor(private service: CharacterService) { }

  ngOnInit() {
    this.characters = this.service.getPeople();
  }

}
