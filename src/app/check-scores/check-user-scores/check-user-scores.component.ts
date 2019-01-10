import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CustomHttpService} from '../../services/custom-http.service';
import {User} from '../../entities/User';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {UserGame} from '../../entities/user-game';

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

    this.http.get('/user/getUserByUsername?username=' + this.loggedInUser.username).subscribe(
      (value: User) => {
        for (let i = 0; i < value.userGameList.length; i++) {
          localScoreDatas.push(new LocalScoresData(value.userGameList[i].id.gameID, value.userGameList[i].score));
        }

        this.dataSource = new MatTableDataSource(localScoreDatas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
