import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(555);
  }

  decrease(): void {
    this.count -= 1;
  }

  increase(): void {
    this.count += 1;
  }
  
  count = 0;
}
