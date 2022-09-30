import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  date: Date = new Date();
  

  constructor() { }
  time = new Date();
  rxTime = new Date();
  intervalId!: string | any;
  subscription: Subscription = new Subscription;

  ngOnInit(): void {
     // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
