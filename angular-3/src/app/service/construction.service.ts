import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root',
})
export class ConstructionService {
  apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.apiURL);
  }

  get(id: number | string): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiURL}${id}`);
  }

  create(construction: Construction): Observable<any> {
    return this.http.post<Construction>(`${this.apiURL}`, construction);
  }

  update(construction: Construction): Observable<any> {
    const id: number = construction.id;
    return this.http.put(`${this.apiURL}${id}`, construction);
  }

  delete(construction: Construction): Observable<any> {
    const id: number = construction.id;
    return this.http.delete<Construction>(`${this.apiURL}/${id}`);
  }
}
