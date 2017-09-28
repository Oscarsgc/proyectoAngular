import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showList = true;
  showContent = true;
  hideItem = true;
  alumnos = [];

  constructor(private http: Http) {
    this.alumnos.push({ nombre: "Jose", edad: 20 })
    this.alumnos.push({ nombre: "Pedro", edad: 23 })
    this.alumnos.push({ nombre: "Carla", edad: 24 })
    this.alumnos.push({ nombre: "Manuel", edad: 19 })
    this.alumnos.push({ nombre: "Ana", edad: 18 })
    this.alumnos.push({ nombre: "Lucia", edad: 25 })
  }

  ngOnInit() {
  }

}
