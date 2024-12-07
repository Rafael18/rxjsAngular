import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent {

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.operatorDelay();
  }

  operatorDelay(){
    this.apiService.getUsersDelay().subscribe(console.log);
  }
}
