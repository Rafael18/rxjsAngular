import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
  constructor(private apiServive: ApiService){}

  ngOnInit(){
    this.operatorShare();
  }

  operatorShare(){
    const obsUser$ = this.apiServive.getUsersShare();
    const nameSandra$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'Sandra Gomes'))
    )

    const nameGleidson$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.email === 'Gleidson@teste.com'))
    )

    obsUser$.subscribe(console.log)
    nameSandra$.subscribe(console.log)
    nameGleidson$.subscribe(console.log)
  }
}
