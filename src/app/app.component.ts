import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decrease(): void {
    this.count -= 1;
  }

  increase(): void {
    this.count += 1;
  }
}
