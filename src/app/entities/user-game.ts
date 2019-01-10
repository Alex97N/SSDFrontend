import {UserGameId} from './user-game-id';
import {User} from './User';
import {Game} from './Game';

export interface UserGame {
  id?: UserGameId;
  user?: User;
  game?: Game;
  score?: number;
}
