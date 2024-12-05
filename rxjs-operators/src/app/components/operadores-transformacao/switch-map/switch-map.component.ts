import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {


  constructor(private apiService: ApiService){}
  @ViewChild('myButton') myButton!: ElementRef;
  ngOnInit(){
  }

  ngAfterViewInit(){
    this.operatorSwitchMap();
    // this.operatorInterval();
  }

  operatorInterval(){
    fromEvent(document, 'click').
    pipe(
      switchMap(() => interval(1000))
    ).subscribe(console.log)
  }

  operatorSwitchMap(){
    fromEvent(this.myButton.nativeElement, 'click')
    .pipe(switchMap(() => this.apiService.getUserSwitchMap())
  ).pipe(
    map((data: any) => data.email),
    switchMap(email => this.apiService.getUserSwitchMapSearch(email))
  ).subscribe(console.log)
  }
}
