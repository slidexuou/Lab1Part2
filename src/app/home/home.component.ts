import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  title:string;

  constructor() { 
    console.log(`[Constructor] - title value = ${this.title}`)
  }

  ngOnInit(): void {
    console.log(`[OnInit] - title vaue = ${this.title}`)
  }

}
