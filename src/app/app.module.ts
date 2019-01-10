import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { GamerUserComponent } from './gamer-user/gamer-user.component';
import { AdminAddUserComponent } from './admin-user/admin-add-user/admin-add-user.component';
import { AdminManageUsersComponent } from './admin-user/admin-manage-users/admin-manage-users.component';
import { FormsModule} from '@angular/forms';
import { ShowGamesComponent} from './show-games/show-games.component';
import { CheckScoresComponent} from './check-scores/check-scores.component';
import { RockPaperScissorsComponent } from './show-games/rockPaperScissors/rockPaperScissors.component';
import { SnakeComponent } from './show-games/snake/snake.component';
import { ToastrModule, ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckUserScoresComponent } from './check-scores/check-user-scores/check-user-scores.component';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CheckGlobalScoresComponent } from './check-scores/check-global-scores/check-global-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminUserComponent,
    GamerUserComponent,
    AdminAddUserComponent,
    AdminManageUsersComponent,
    ShowGamesComponent,
    CheckScoresComponent,
    CheckUserScoresComponent,
    CheckScoresComponent,
    RockPaperScissorsComponent,
    SnakeComponent,
    CheckGlobalScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
