import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

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
