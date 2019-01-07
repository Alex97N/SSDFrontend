import {UserGameId} from '../userGameId/user-game-id';
import {User} from '../user/User';
import {Game} from '../game/Game';

export interface UserGame {
  id?: UserGameId;
  user?: User;
  game?: Game;
  score?: number;
}
