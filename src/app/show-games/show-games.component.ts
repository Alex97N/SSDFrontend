import {Component, Input, OnInit} from '@angular/core';
import {User} from '../entities/User';

@Component({
  selector: 'app-show-games',
  templateUrl: './show-games.component.html',
  styleUrls: ['./show-games.component.css']
})
export class ShowGamesComponent implements OnInit {

  gnr = 0;

  @Input() loggedInUser: User;

  constructor() { }

  ngOnInit() {
  }

}
