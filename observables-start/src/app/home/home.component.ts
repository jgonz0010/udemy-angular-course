import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
    .pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));

    this.numberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
  }

}
