import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  characters: Character[] = [];

  constructor(private service: CharacterService) { }

  ngOnInit() {
    this.service.getPeople().subscribe(data => {
      console.log(data);
      this.characters = data;
    });
  }

}
