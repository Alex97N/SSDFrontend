import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CustomHttpService} from '../../services/custom-http.service';
import {UserGame} from '../../entities/user-game';

export class LocalScoresData {
  username: string;
  gameName: string;
  score: number;

  constructor(username: string, gameName: string, score: number) {
    this.username = username;
    this.gameName = gameName;
    this.score = score;
  }
}

@Component({
  selector: 'app-check-global-scores',
  templateUrl: './check-global-scores.component.html',
  styleUrls: ['./check-global-scores.component.css']
})
export class CheckGlobalScoresComponent implements OnInit {

  displayedColumns: string[] = ['username', 'gameName', 'score'];
  dataSource: MatTableDataSource<LocalScoresData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: CustomHttpService) {
  }

  ngOnInit() {
    let localScoreDatas: LocalScoresData[] = [];

    this.http.get('/userGame/getAllUserGames').subscribe(
      (value: Array<UserGame>) => {
        for (let i = 0; i < value.length; i++) {
          localScoreDatas.push(new LocalScoresData(value[i].id.userID, value[i].id.gameID, value[i].score));
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
