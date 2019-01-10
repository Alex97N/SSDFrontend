import {Role} from './Role';
import {UserGame} from './user-game';

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
