import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'created'];
  dataSource: MatTableDataSource<Character>;

  constructor(private service: CharacterService) { }

  ngOnInit() {
    this.service.getPeople().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
