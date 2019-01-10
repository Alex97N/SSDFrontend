import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/User';

@Component({
  selector: 'app-check-scores',
  templateUrl: './check-scores.component.html',
  styleUrls: ['./check-scores.component.css']
})
export class CheckScoresComponent implements OnInit {

  @Input() loggedInUser: User;

  snr = 0;

  constructor() { }

  ngOnInit() {
  }

}
