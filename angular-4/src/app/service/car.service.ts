import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL);
  }

  get(id: number | string): Observable<Car> {
    return this.http.get<Car>(`${this.apiURL}${id}`);
  }

  create(car: Car): Observable<any> {
    return this.http.post<Car>(`${this.apiURL}`, car);
  }

  update(car: Car): Observable<any> {
    const id: number = car.id;
    return this.http.put(`${this.apiURL}${id}`, car);
  }

  delete(car: Car): Observable<any> {
    const id: number = car.id;
    return this.http.delete<Car>(`${this.apiURL}/${id}`);
  }
}
