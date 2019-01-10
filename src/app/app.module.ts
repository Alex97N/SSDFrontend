import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { GamerUserComponent } from './gamer-user/gamer-user.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';
import {FormsModule} from '@angular/forms';
import {ShowGamesComponent} from './show-games/show-games.component';
import {CheckScoresComponent} from './check-scores/check-scores.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckUserScoresComponent } from './check-user-scores/check-user-scores.component';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    AdminUserComponent,
    GamerUserComponent,
    AdminAddUserComponent,
    AdminManageUsersComponent,
    ShowGamesComponent,
    CheckScoresComponent,
    CheckUserScoresComponent
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
    MatInputModule
  ],
  providers: [
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
