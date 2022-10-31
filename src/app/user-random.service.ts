import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRandomService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders({

    });

    this.http
      .get<any>('https://randomuser.me/api/', {
        headers: headers
      })

      .subscribe(data => {
        const user = data
        console.log(data);
      });
  }
}
