import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  // On demande une variable headers aux composants appelants
  @Input() headers: string[];

  constructor() { }

  ngOnInit() {
  }

}
