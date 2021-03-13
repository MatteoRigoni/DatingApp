import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  baseUrl = "https://localhost:5001/api/"
  validationErrors : string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getServerError(){
    this.http.get(this.baseUrl + "buggy/server-error").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  getBadRequest(){
    this.http.get(this.baseUrl + "buggy/bad-request").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }
  get401Error(){
    this.http.get(this.baseUrl + "buggy/auth").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }
}
