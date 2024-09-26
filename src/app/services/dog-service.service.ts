import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  url = 'https://dog.ceo/dog-api/';

  constructor(private httpClient: HttpClient) { }
  
  getDogs(): Observable<any> {
    return this.httpClient.get(this.url, {responseType:'text' })
  }
}
