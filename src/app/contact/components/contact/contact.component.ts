import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private analytics: AngularFireAnalytics) {
    // this.analytics.logEvent('ngOnInit', { name: 'lever_puzzle'});
  }

  ngOnInit(): void {
    // firebase.analytics();
    // this.analytics.logEvent('goal_completion', { name: 'lever_puzzle'});
    this.analytics.setUserProperties({ favorite_food: 'apples' });
    console.log('H!!!!!');
  }
}
