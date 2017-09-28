import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  private muestra: boolean = false;
  private http: Http;
  constructor(requester: Http) {
    this.http = requester;
  }

  ngOnInit() {
    let query = 'www.google.com';
    this.http.get(query).subscribe((response: any) => {
      console.log(response);
    })
  }

}
