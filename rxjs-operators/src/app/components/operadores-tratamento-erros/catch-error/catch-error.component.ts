import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent {

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.operatorCathError();
  }

  operatorCathError(){
    this.apiService.getUserCathError().subscribe(console.log);
  }
}
