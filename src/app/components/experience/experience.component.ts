import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  private educacion: any = [];
  constructor(private http: Http) { }

  ngOnInit() {
    let url = "http://localhost:3000/educacion";
    this.http.get(url).subscribe((response: any) => {
      this.educacion = JSON.parse(response._body);
    })
  }

}
