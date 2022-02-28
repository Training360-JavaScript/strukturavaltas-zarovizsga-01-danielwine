import { Component } from '@angular/core';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-3';
  items$ = this.constructionService.getAll();

  constructor(private constructionService: ConstructionService) {}

  onDelete(item: Construction) {
    this.constructionService.delete(item).subscribe((data) => {
      console.log(data);
      this.items$ = this.constructionService.getAll();
    });
  }
}
