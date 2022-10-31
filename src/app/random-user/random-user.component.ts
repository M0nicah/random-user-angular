import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
    data!: object;
    loading!: boolean;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {}

    makeRequest(): void {
      this.loading = true;
      this.http.get<any>('https://randomuser.me/api/')
      .subscribe((data: object) => {
        this.data = data;
        this.loading = false;
        console.log(data)
      });
    }
  }
