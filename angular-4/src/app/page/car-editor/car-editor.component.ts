import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/model/car';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss'],
})
export class CarEditorComponent implements OnInit {
  car$: Observable<Car> = this.ar.params.pipe(
    switchMap((params) => this.cs.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private cs: CarService,
    private router: Router
  ) {}

  onUpdate(carForm: Form) {}

  ngOnInit(): void {}
}
