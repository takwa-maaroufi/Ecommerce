import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque.model';

const httpOptions = {
  headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
};

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private baseUrl = 'http://localhost:8080/api/marque/';

  constructor(private http:HttpClient) { }
  getAll(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.baseUrl);
  }
}
