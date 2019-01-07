import {Role} from '../role/Role';
import {UserGame} from '../userGame/user-game';

export interface User {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  active?: boolean;
  role?: Role;
  userGameList?: Array<UserGame>;

}
