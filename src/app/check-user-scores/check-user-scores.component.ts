import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CustomHttpService} from '../services/custom-http.service';
import {User} from '../user/User';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export class LocalScoresData {
  gameName: string;
  score: number;

  constructor(gameName: string, score: number) {
    this.gameName = gameName;
    this.score = score;
  }
}

@Component({
  selector: 'app-check-user-scores',
  templateUrl: './check-user-scores.component.html',
  styleUrls: ['./check-user-scores.component.css']
})
export class CheckUserScoresComponent implements OnInit {

  @Input() loggedInUser: User;

  displayedColumns: string[] = ['gameName', 'score'];
  dataSource: MatTableDataSource<LocalScoresData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: CustomHttpService) {
  }

  ngOnInit() {

    let localScoreDatas: LocalScoresData[] = [];

    for (let i = 0; i < this.loggedInUser.userGameList.length; i++) {
      localScoreDatas.push(new LocalScoresData(this.loggedInUser.userGameList[i].id.gameID, this.loggedInUser.userGameList[i].score));
    }

    this.dataSource = new MatTableDataSource(localScoreDatas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
