import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent {
  constructor(private apiService: ApiService){}

  ngOnInit(){
    // this.getUsersZip();
    // this.getUsersConcat();
  }

  getUsersZip(){
    this.apiService.getUsersMerge().subscribe(
      resp => console.log(resp)
    )
  }


  getUsersConcat(){
    const unsub = this.apiService.getUsersConcat().subscribe(
      resp => console.log(resp)
    )

    setTimeout(() => unsub.unsubscribe, 7000)
  }
}
