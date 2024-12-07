import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.operatorTimeout();
  }

  operatorTimeout(){
    this.apiService.getUsersTimeout().subscribe(console.log);
  }
}
