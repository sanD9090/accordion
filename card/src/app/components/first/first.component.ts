import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  items = ['Item 1','2nd item'];
  expandedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
